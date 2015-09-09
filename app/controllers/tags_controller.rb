class TagsController < ApplicationController

  def create
    @tag = Tag.new(tag_params)

    respond_to do |format|
      if @tag.save 

        format.html {redirect_to @tag, notice: 'Tag was successfully'}
        format.json { render :json => @tag, status: :created }

      else
        format.html { render :new }
        format.json { render :new }
      end
    end
  end

  private

    def tag_params
      params.require(:tag).permit(:character_name, :x_position, :y_position)
    end
end
