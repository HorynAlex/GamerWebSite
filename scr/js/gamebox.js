let game_bx_1 = document.getElementById('game_bx_1');
let game_bx_1_left_btn = document.getElementById('game_bx_1_left_btn');
let game_bx_1_right_btn = document.getElementById('game_bx_1_right_btn');

game_bx_1_left_btn.addEventListener('click', ()=>{
    game_bx_1.scrollLeft -= 250;
})
game_bx_1_right_btn.addEventListener('click', ()=>{
    game_bx_1.scrollLeft += 250;
})
