require 'fileutils'
require 'byebug'; alias :breakpoint :byebug

# pull out previous build file
# ruui build a production run
# copy to parliament
#
# post build manual steps:
# - add 'assets/' to iphonex.png reference
# - move hash js name to bundle.js
# - push to heroku

puts "making sure that cubaHost isn't pointing at localhost..."
agresult = `ag --nofilename 'const cubaHost = local'`
unless agresult.include? '//'
  puts 'cubaHost appears to be pointed to local. Do you want to proceed?'
  p
  gets
else
  puts 'cubaHost appears to be set to heroku, proceeding'
end

if not ENV['PARLIAMENT_HOME']
  raise ScriptError, 'please define $PARLIAMENT_HOME'
else
  @dest = "#{ENV['PARLIAMENT_HOME']}/js"
end

avoid = [
  '.',
  '..',
  'index.html',
  'bundle.js',
  'iphonex.png',
  'ruui.json',
  'vendor-manifest.json',
  'vendor.cache.js',
]

## get rid of previous builds
to_delete = []

Dir.entries('web').each do |fn|
  unless avoid.include?(fn)
    to_delete << "#{'web/'}#{fn}"
  end
end

FileUtils.rm(to_delete)

# bundle
system('ruui bundle')

# find name of new artifact
artifact_filename = nil

Dir.entries('web').each do |fn|
  unless avoid.include?(fn)
    artifact_filename = "#{'web/'}#{fn}"
  end
end

# fix iphonex reference
ff = File.open(artifact_filename, 'r')
gg = File.open('bundle.js', 'w')

ff.each_line do |line|
  unless line.include? 'iphonex.png'
    gg.write(line)
  else
    fixed = line.gsub('iphonex.png','assets/iphonex.png')
    gg.write(fixed)
  end
end

ff.close
gg.close

FileUtils.cp('bundle.js', @dest)
