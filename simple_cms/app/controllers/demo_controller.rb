class DemoController < ApplicationController
  def index
  	# render('demo/hello')
  	# redirect_to('www.google.com')
  	# redirect_to('http://www.google.com')
  end
  def hello 
  	# render(:text=>'hello everyone') 	
    @array=[1,2,3,4,5]
    @id=params[:id].to_i
    @page=params[:page].to_i
  end
  def other_hello 
  	# render(:text=>'hello everyone') 	
  end

end
