class StaticPagesController < ApplicationController
	def index
    text = "Hola bienvenido a mi pagina web, podras aprender lo que quieras sobre programacion,
            "
    set_meta_tags description: "#{text}"
	end
end
