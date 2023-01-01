import chess.pgn
import chess
import chess.svg
import imageio
import chess.engine
import os
from matplotlib import pyplot
from cairosvg import svg2png

class analyse_multi_games:
    
    def __init__(self, file_name, player=""):
        self.game_file = open(file_name, "r")
        self.player = player
        self.engine = chess.engine.SimpleEngine.popen_uci("/home/destroyer5237/Documentos/Projetos_Python/PythonChess/stockfish-10-linux/Linux/stockfish_10_x64")
        self.board = chess.Board()
        self.depth = 36
        self.analyses_games = []
        self.games_instances = []
        
        if "MovesPng" not in os.listdir() and "MovesPng" not in os.listdir():
            os.mkdir("MovesPng")
            os.mkdir("GraphicsGame")
    
    def start_games(self, number_of_games=True):
        
        pgn_game = False
        
        if number_of_games == True:
            while not pgn_game is None:
                pgn_game = chess.pgn.read_game(self.game_file)
                self.games_instances.append(pgn_game)
        else:
            for num in range(number_of_games):
                pgn_game = chess.pgn.read_game(self.game_file)
    
                if pgn_game is None:
                    return True
                else:
                    self.games_instances.append(pgn_game)
    
    def analyse_pgn(self, games_number, time_analyse=1):
        
        for game in range(games_number):
                
                pgn_game = self.games_instances[game]
                player_with = True
                list_pontuation = []
                self.board = chess.Board()
                
                if self.player != "":
                    if pgn_game.headers["White"] == self.player:
                        player_with = True
                    else:
                        player_with = False
                
                
                for move in pgn_game.mainline_moves():
                    score = self.engine.analyse(board=self.board, limit=chess.engine.Limit(time=time_analyse, depth=self.depth))["score"]
                    pontuation = chess.engine.PovScore(score, self.board.turn)
                    if not pontuation.is_mate():
                        if self.board.turn == player_with:
                            list_pontuation.append(int(str(pontuation))/100)
                        else:
                            list_pontuation.append(-int(str(pontuation))/100)
                    else:
                        list_pontuation.append(str(pontuation))
                        
                    self.board.push(move)
                
                self.analyses_games.append(list_pontuation)
        
    def get_gif_game(self, game_number=1, speed=2):                        
        
        game_gif = self.games_instances[game_number - 1]
        board_gif = chess.Board()
        count = 0
        images_files = []
        
        for move in game_gif.mainline_moves():
            generated_svg = chess.svg.board(board=board_gif)
            svg2png(bytestring=generated_svg, parent_width=500, parent_height=500, write_to=f"MovesPng/move_{count}.png")
            images_files.append(f"MovesPng/move_{count}.png")
            count += 1
            board_gif.push(move)
        
        images = []
        for filename in images_files:
            images.append(imageio.imread(filename))
            
        imageio.mimsave(f'game_{game_number}.gif', images, fps=speed)
        
        for i in range(count):
            os.remove(f"MovesPng/move_{i}.png")
    
    def generate_game_graphics(self, game=1):
        
        if len(self.analyses_games) < game:
            return "Jogo ainda não foi analisado!"  
        
        game_to_graphic = self.analyses_games[game-1]
        pgn_game = self.games_instances[game-1]
        
        x_graphics = [x for x in range(1, len(game_to_graphic) + 1)]
        title_name = pgn_game.headers["Event"]
        pyplot.rcParams["figure.figsize"] = (6.4*4, 4.8)
        pyplot.plot(x_graphics, game_to_graphic, color="black")
        pyplot.plot(x_graphics, game_to_graphic, color="black", marker="o")
        pyplot.title(f"Partida {title_name}")
        pyplot.ylabel("Sua Vantagem")
        pyplot.xlabel("Lance")
        pyplot.savefig(f"GameGraphics_{game}.svg")
        
    
    
games_file = input("Digite o nome do arquivo com seus jogos:")

ana = analyse_multi_games(games_file, player="NDestroyer5237")
ana.start_games(number_of_games=2)
ana.get_gif_game(2)
ana.analyse_pgn(games_number=1, time_analyse=0.1)
ana.generate_game_graphics(game=1)