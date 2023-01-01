x_axis = ('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h')
y_axis = ('8', '7', '6', '5', '4', '3', '2', '1')
pieces = ('p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'r1', 'r2', 'n1', 'n2', 'b1', 'b2', 'q', 'k')

def DrawPiece(piece, color):
    if color == 'w':
        print(piece[: 1].upper(), end = ' ')
    else:
        print(piece[: 1], end = ' ')


def DrawField(white_pieces, black_pieces):
    global x_axis
    global y_axis
    global pieces
    is_drown = False
    
    print('  A B C D E F G H', '\n')
    
    for y in y_axis:
        print(y, end = ' ')

        for x in x_axis:
            position = [x, y]

            for piece in pieces:
                if white_pieces[piece] == position:
                    DrawPiece(piece, 'w')
                    is_drown = True
                elif black_pieces[piece] == position:
                    DrawPiece(piece, 'b')
                    is_drown = True
                else:
                    if is_drown:
                        break
            if not is_drown:
                print('.', end = ' ')
            is_drown = False

        print(y)

    print('\n', ' A B C D E F G H', '\n')


def CheckChoice(pos, color, white_pieces, black_pieces):
    global pieces

    if color == 'w':
        for piece in pieces:
            if white_pieces[piece] == pos:
                return piece
        return None
    else:
        for piece in pieces:
            if black_pieces[piece] == pos:
                return piece
        return None


def CheckEmptySquare(pos, white_pieces, black_pieces):
    global pieces
    for piece in pieces:
        if pos == white_pieces[piece] or pos == black_pieces[piece]:
            return False
    return True


def CheckPosToGo(pos):
    global x_axis
    global y_axis

    if pos[0] not in x_axis or pos[1] not in y_axis or len(pos) != 2:
        return False
    else:
        return True


def CheckPieceColor(pos):
    global pieces
    for piece in pieces:
        if pos == white_pieces[piece]:
            return 'w'
        elif pos == black_pieces[piece]:
            return 'b'
    return None


def CheckRoute(pos, pos_to_go, white_pieces, black_pieces):
    global x_axis
    global y_axis

    check_pos = pos.copy()
    if pos[0] == pos_to_go[0]:
        for i in range(abs(y_axis.index(pos[1]) - y_axis.index(pos_to_go[1])) - 1):
            if y_axis.index(pos[1]) > y_axis.index(pos_to_go[1]):
                check_pos[1] = y_axis[y_axis.index(pos[1]) - 1 - i]
                if not CheckEmptySquare(check_pos, white_pieces, black_pieces):
                    return False
            else:
                check_pos[1] = y_axis[y_axis.index(pos[1]) + 1 + i]
                if not CheckEmptySquare(check_pos, white_pieces, black_pieces):
                    return False
        return True

    elif pos[1] == pos_to_go[1]:
        for i in range(abs(x_axis.index(pos[0]) - x_axis.index(pos_to_go[0])) - 1):
            if x_axis.index(pos[0]) > x_axis.index(pos_to_go[0]):
                check_pos[0] = x_axis[x_axis.index(pos[0]) - 1 - i]
                if not CheckEmptySquare(check_pos, white_pieces, black_pieces):
                    return False
            else:
                check_pos[0] = x_axis[x_axis.index(pos[0]) + 1 + i]
                if not CheckEmptySquare(check_pos, white_pieces, black_pieces):
                    return False
        return True

    elif abs(x_axis.index(pos[0]) - x_axis.index(pos_to_go[0])) == abs(y_axis.index(pos[1]) - y_axis.index(pos_to_go[1])):
        for i in range(abs(y_axis.index(pos[1]) - y_axis.index(pos_to_go[1])) - 1):
            if y_axis.index(pos[1]) > y_axis.index(pos_to_go[1]):
                check_pos[1] = y_axis[y_axis.index(pos[1]) - 1 - i]
            else:
                check_pos[1] = y_axis[y_axis.index(pos[1]) + 1 + i]

            if x_axis.index(pos[0]) > x_axis.index(pos_to_go[0]):
                check_pos[0] = x_axis[x_axis.index(pos[0]) - 1 - i]
            else:
                check_pos[0] = x_axis[x_axis.index(pos[0]) + 1 + i]

            if not CheckEmptySquare(check_pos, white_pieces, black_pieces):
                return False
        return True


def CheckMove(pos, pos_to_go, piece, color, white_pieces, black_pieces):
    global x_axis
    global y_axis
    global pieces
    is_empty = CheckEmptySquare(pos_to_go, white_pieces, black_pieces)

    if piece[0] == 'p':
        if color == 'w':
            if x_axis.index(pos[0]) - x_axis.index(pos_to_go[0]) == 0 and y_axis.index(pos[1]) - y_axis.index(pos_to_go[1]) == 1 and is_empty:
                return True
            elif x_axis.index(pos[0]) - x_axis.index(pos_to_go[0]) == 0 and y_axis.index(pos[1]) - y_axis.index(pos_to_go[1]) == 2 and pos[1] == '2' and is_empty and CheckEmptySquare([pos[0], '3'], white_pieces, black_pieces):
                return True
            elif abs(x_axis.index(pos[0]) - x_axis.index(pos_to_go[0])) == 1 and y_axis.index(pos[1]) - y_axis.index(pos_to_go[1]) == 1 and not is_empty:
                if CheckPieceColor(pos_to_go) == 'b':
                    return True
                else:
                    return False
            else:
                return False
        else:
            if x_axis.index(pos[0]) - x_axis.index(pos_to_go[0]) == 0 and y_axis.index(pos[1]) - y_axis.index(pos_to_go[1]) == -1 and is_empty:
                return True
            elif x_axis.index(pos[0]) - x_axis.index(pos_to_go[0]) == 0 and y_axis.index(pos[1]) - y_axis.index(pos_to_go[1]) == -2 and pos[1] == '7' and is_empty and CheckEmptySquare([pos[0], '6'], white_pieces, black_pieces):
                return True
            elif abs(x_axis.index(pos[0]) - x_axis.index(pos_to_go[0])) == 1 and y_axis.index(pos[1]) - y_axis.index(pos_to_go[1]) == -1 and not is_empty:
                if CheckPieceColor(pos_to_go) == 'w':
                    return True
                else:
                    return False
            else:
                return False

    elif piece[0] == 'n':
        if color == 'w':
            if (abs(x_axis.index(pos[0]) - x_axis.index(pos_to_go[0])) == 2 and abs(y_axis.index(pos[1]) - y_axis.index(pos_to_go[1])) == 1) or (abs(x_axis.index(pos[0]) - x_axis.index(pos_to_go[0])) == 1 and abs(y_axis.index(pos[1]) - y_axis.index(pos_to_go[1])) == 2):
                if is_empty or CheckPieceColor(pos_to_go) == 'b':
                    return True
                else:
                    return False
            else:
                return False
        else:
            if (abs(x_axis.index(pos[0]) - x_axis.index(pos_to_go[0])) == 2 and abs(y_axis.index(pos[1]) - y_axis.index(pos_to_go[1])) == 1) or (abs(x_axis.index(pos[0]) - x_axis.index(pos_to_go[0])) == 1 and abs(y_axis.index(pos[1]) - y_axis.index(pos_to_go[1])) == 2):
                if is_empty or CheckPieceColor(pos_to_go) == 'w':
                    return True
                else:
                    return False

    elif piece[0] == 'r':
        if color == 'w':
            if (pos[0] == pos_to_go[0] or pos[1] == pos_to_go[1]) and CheckRoute(pos, pos_to_go, white_pieces, black_pieces):
                if is_empty or CheckPieceColor(pos_to_go) == 'b':
                    return True
                else:
                    return False
            else:
                return False
        else:
            if (pos[0] == pos_to_go[0] or pos[1] == pos_to_go[1]) and CheckRoute(pos, pos_to_go, white_pieces, black_pieces):
                if is_empty or CheckPieceColor(pos_to_go) == 'w':
                    return True
                else:
                    return False
            else:
                return False

    elif piece[0] == 'b':
        if color == 'w':
            if abs(x_axis.index(pos[0]) - x_axis.index(pos_to_go[0])) == abs(y_axis.index(pos[1]) - y_axis.index(pos_to_go[1])) and CheckRoute(pos, pos_to_go, white_pieces, black_pieces):
                if is_empty or CheckPieceColor(pos_to_go) == 'b':
                    return True
                else:
                    return False
            else:
                return False
        else:
            if abs(x_axis.index(pos[0]) - x_axis.index(pos_to_go[0])) == abs(y_axis.index(pos[1]) - y_axis.index(pos_to_go[1])) and CheckRoute(pos, pos_to_go, white_pieces, black_pieces):
                if is_empty or CheckPieceColor(pos_to_go) == 'w':
                    return True
                else:
                    return False
            else:
                return False

    elif piece[0] == 'q':
        if color == 'w':
            if abs(x_axis.index(pos[0]) - x_axis.index(pos_to_go[0])) == abs(y_axis.index(pos[1]) - y_axis.index(pos_to_go[1])) or (pos[0] == pos_to_go[0] or pos[1] == pos_to_go[1]) and CheckRoute(pos, pos_to_go, white_pieces, black_pieces):
                if is_empty or CheckPieceColor(pos_to_go) == 'b':
                    return True
                else:
                    return False
            else:
                return False
        else:
            if abs(x_axis.index(pos[0]) - x_axis.index(pos_to_go[0])) == abs(y_axis.index(pos[1]) - y_axis.index(pos_to_go[1])) or (pos[0] == pos_to_go[0] or pos[1] == pos_to_go[1]) and CheckRoute(pos, pos_to_go, white_pieces, black_pieces):
                if is_empty or CheckPieceColor(pos_to_go) == 'w':
                    return True
                else:
                    return False
            else:
                return False

    elif piece[0] == 'k':
        if color == 'w':
            if abs(x_axis.index(pos[0]) - x_axis.index(pos_to_go[0])) <= 1 and abs(y_axis.index(pos[1]) - y_axis.index(pos_to_go[1])) <= 1 and CheckRoute(pos, pos_to_go, white_pieces, black_pieces):
                if is_empty or CheckPieceColor(pos_to_go) == 'b':
                    can_move = True
                    for piece in pieces:
                        if black_pieces[piece] != [None, None]:
                            if CheckMove(black_pieces[piece], pos_to_go, piece, 'b', white_pieces, black_pieces):
                                can_move = False
                                break
                    if can_move:
                        return True
                    else:
                        return False
        else:
            if abs(x_axis.index(pos[0]) - x_axis.index(pos_to_go[0])) <= 1 and abs(y_axis.index(pos[1]) - y_axis.index(pos_to_go[1])) <= 1 and CheckRoute(pos, pos_to_go, white_pieces, black_pieces):
                if is_empty or CheckPieceColor(pos_to_go) == 'w':
                    can_move = True
                    for piece in pieces:
                        if white_pieces[piece] != [None, None]:
                            if CheckMove(white_pieces[piece], pos_to_go, piece, 'w', white_pieces, black_pieces):
                                can_move = False
                                break
                    if can_move:
                        return True
                    else:
                        return False



white_pieces = {'p1' : ['a', '2'], 'p2' : ['b', '2'], 'p3' : ['c', '2'], 'p4' : ['d', '2'], 'p5' : ['e', '2'], 'p6' : ['f', '2'], 'p7' : ['g', '2'], 'p8' : ['h', '2'],
                'r1' : ['a', '1'], 'r2' : ['h', '1'], 'n1' : ['b', '1'], 'n2' : ['g', '1'], 'b1' : ['c', '1'], 'b2' : ['f', '1'], 'q' : ['d', '1'], 'k' : ['e', '1']}

black_pieces = {'p1' : ['a', '7'], 'p2' : ['b', '7'], 'p3' : ['c', '7'], 'p4' : ['d', '7'], 'p5' : ['e', '7'], 'p6' : ['f', '7'], 'p7' : ['g', '7'], 'p8' : ['h', '7'],
                'r1' : ['a', '8'], 'r2' : ['h', '8'], 'n1' : ['b', '8'], 'n2' : ['g', '8'], 'b1' : ['c', '8'], 'b2' : ['f', '8'], 'q' : ['d', '8'], 'k' : ['e', '8']}

is_w_k_moved = False
is_w_r1_moved = False
is_w_r2_moved = False
is_b_k_moved = False
is_b_r1_moved = False
is_b_r2_moved = False

history = [[white_pieces.copy(), black_pieces.copy(), is_w_k_moved, is_w_r1_moved, is_w_r2_moved, is_b_k_moved, is_b_r1_moved, is_b_r2_moved]]

color = ('w', 'b')
c = 0

while True:
    DrawField(white_pieces, black_pieces)

    if color[c % 2] == 'w':
        pos = input('ход белых, выберите фигуру: ')
    else:
        pos = input('ход черных, выберите фигуру: ')

    if pos[0] != '-':
        pos = list(pos)
        picked_piece = CheckChoice(pos, color[c % 2], white_pieces, black_pieces)
        while picked_piece == None:
            pos = list(input('на этом месте нет вашей фигуры, введите другую позицию: '))
            picked_piece = CheckChoice(pos, color[c % 2], white_pieces, black_pieces)

        pos_to_go = list(input('введите позицию, на которую пойдет фигура: '))

        while not CheckPosToGo(pos_to_go):
            pos_to_go = list(input('такой позиции нет на шахматной доске, введите другую: '))
        correct_move = CheckMove(pos, pos_to_go, picked_piece, color[c % 2], white_pieces, black_pieces)
    
        while not correct_move:
            pos_to_go = list(input('ваша фигура не может сделать такой ход, выберите другую позицию: '))
            while not CheckPosToGo(pos_to_go):
                pos_to_go = list(input('такой позиции нет на шахматной доске, введите другую: '))
            correct_move = CheckMove(pos, pos_to_go, picked_piece, color[c % 2], white_pieces, black_pieces)
    
        if not CheckEmptySquare(pos_to_go, white_pieces, black_pieces):
            piece_to_kill = CheckChoice(pos_to_go, color[(c + 1) % 2], white_pieces, black_pieces)
            if color[c % 2] == 'w':
                black_pieces[piece_to_kill] = [None, None]
            else:
                white_pieces[piece_to_kill] = [None, None]

        if color[c % 2] == 'w':
            white_pieces[picked_piece] = pos_to_go
        else:
            black_pieces[picked_piece] = pos_to_go
        if color[c % 2] == 'w':
            if picked_piece == 'k':
                is_w_k_moved = True
            elif picked_piece == 'r1':
                is_w_r1_moved = True
            elif picked_piece == 'r2':
                is_w_r2_moved = True
        else:
            if picked_piece == 'k':
                is_b_k_moved = True
            elif picked_piece == 'r1':
                is_b_r1_moved = True
            elif picked_piece == 'r2':
                is_b_r2_moved = True

        c += 1
        history.append([white_pieces.copy(), black_pieces.copy(), is_w_k_moved, is_w_r1_moved, is_w_r2_moved, is_b_k_moved, is_b_r1_moved, is_b_r2_moved])

    elif pos == '-back':
        print('выберите количество ходов на которое хотите вернуться (максимум', c, 'ходов): ', end = '')
        q_of_moves = int(input())
        
        while q_of_moves > c:
            print('вы выбрали неправильное количество ходов, введите новое значение (максимум', c, 'ходов): ', end = '')
            q_of_moves = int(input())

        white_pieces = history[c - q_of_moves][0]
        black_pieces = history[c - q_of_moves][1]
        is_w_k_moved = history[c - q_of_moves][2]
        is_w_r1_moved = history[c - q_of_moves][3]
        is_w_r2_moved = history[c - q_of_moves][4]
        is_b_k_moved = history[c - q_of_moves][5]
        is_b_r1_moved = history[c - q_of_moves][6]
        is_b_r2_moved = history[c - q_of_moves][7]
        history = history[: c - q_of_moves]
        c -= q_of_moves

    elif pos == '-castling':
        if color[c % 2] == 'w':
            if is_w_k_moved == True or (is_w_r1_moved and is_w_r2_moved):
                print('рокировка невозможна, выберите другой ход')
            else:
                if not is_w_r1_moved and CheckRoute(['a', '1'], ['e', '1'], white_pieces, black_pieces):
                    print('вам доступна длинная рокировка, введите -long чтобы выполнить её')
                if not is_w_r2_moved and CheckRoute(['h', '1'], ['e', '1'], white_pieces, black_pieces):
                    print('вам доступна короткая рокировка, введите -short чтобы выполнить её')
                type = input('введите тип рокеровки:')
                
                if type == '-long':
                    white_pieces['k'] = ['c', '1']
                    white_pieces['r1'] = ['d', '1']
                    is_w_r1_moved = True
                else:
                    white_pieces['k'] = ['g', '1']
                    white_pieces['r2'] = ['f', '1']
                    is_w_r2_moved = True
                is_w_k_moved = True
        else:
            if is_b_k_moved == True or (is_b_r1_moved and is_b_r2_moved):
                print('рокировка невозможна, выберите другой ход')
            else:
                if not is_b_r1_moved and CheckRoute(['a', '8'], ['e', '8'], white_pieces, black_pieces):
                    print('вам доступна длинная рокировка, введите -long чтобы выполнить её')
                if not is_b_r2_moved and CheckRoute(['h', '8'], ['e', '8'], white_pieces, black_pieces):
                    print('вам доступна короткая рокировка, введите -short чтобы выполнить её')

                type = input('введите тип рокировки:')

                if type == '-long':
                    black_pieces['k'] = ['c', '8']
                    black_pieces['r1'] = ['d', '8']
                    is_b_r1_moved = True
                else:
                    black_pieces['k'] = ['g', '8']
                    black_pieces['r2'] = ['f', '8']
                    is_b_r2_moved = True
                is_b_k_moved = True

        history.append([white_pieces.copy(), black_pieces.copy(), is_w_k_moved, is_w_r1_moved, is_w_r2_moved, is_b_k_moved, is_b_r1_moved, is_b_r2_moved])
        c += 1
                    

