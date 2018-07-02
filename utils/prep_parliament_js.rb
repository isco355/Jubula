require 'fileutils'

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

system('ruui bundle')

## copy over new build
to_copy = []

Dir.entries('web').each do |fn|
  unless avoid.include?(fn)
    to_copy << "#{'web/'}#{fn}"
  end
end

FileUtils.cp(to_copy, @dest)
