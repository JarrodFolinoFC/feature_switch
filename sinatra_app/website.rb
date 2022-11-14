require 'sinatra'
require_relative 'feature_toggle'

get '/' do
  flags = $flagsmith.get_environment_flags
  erb :index, :locals => {
    new_tcs_enabled: flags.is_feature_enabled("new_tcs")
  }
end
