require 'byebug'; alias :breakpoint :byebug

if not ENV['PARLIAMENT_HOME']
  raise ScriptError, 'please define $PARLIAMENT_HOME'
else
  @dest = ENV['PARLIAMENT_HOME']
end

avoid = [
  'bundle.js',
  'iphonex.png',
  'ruui.json',
  'vendor-manifest.json',
  'vendor.cache.js',
]

Dir.entries('../web').each do |fn|
  unless avoid.include?(fn)
    FileUtils.cp(fn, @dest)
  end
end

breakpoint
puts
