let animal_1 = 'cat';
let animal_2 = 'monkey';
let animal_3 = 'panda';
let animal_4 = 'cat';
let animal_5 = 'monkey';
// kiem tra ghep thanh buc tranh hoan thien khong
function checkImg() {
    if (animal_1 === animal_2)
        if (animal_2 === animal_3)
            if (animal_3 === animal_4)
                if (animal_4 === animal_5) {
                    let puzzle = document.getElementById('puzzle');
                    puzzle.style = "box-shadow: 2px 3px 3px red";
                    document.getElementById('img1').style = "box-shadow: 2px 3px 3px red";
                    document.getElementById('img2').style = "box-shadow: 2px 3px 3px red";
                    document.getElementById('img3').style = "box-shadow: 2px 3px 3px red";
                    document.getElementById('img4').style = "box-shadow: 2px 3px 3px red";
                    document.getElementById('img5').style = "box-shadow: 2px 3px 3px red";
                }
}
// ham doi anh khi onclick vao img1
function onClickImg1() {
    let img1 = document.getElementById('img1');
    if (img1.src.match('funny-cat1_part1x1.jpg')){
        img1.src = 'monkey_part1x1.jpg';
        animal_1 = 'monkey';
    }
    else if (img1.src.match('monkey_part1x1.jpg')){
        img1.src = 'panda_swap_part1x1.jpg';
        animal_1 = 'panda';
    }
    else {
        img1.src = 'funny-cat1_part1x1.jpg';
        animal_1 = 'cat';
    }
    checkImg();
}
//  ham doi anh khi click vao img2
function onClickImg2() {
    let img2 = document.getElementById('img2');
    if (img2.src.match('monkey_part2x1.jpg')) {
        img2.src = 'funny-cat1_part2x1.jpg';
        animal_2 = 'cat';
    } else if (img2.src.match('funny-cat1_part2x1.jpg')) {
        img2.src = 'panda_swap_part2x1.jpg';
        animal_2 = 'panda';
    } else {
        img2.src = 'monkey_part2x1.jpg';
        animal_2 = 'monkey';
    }
    checkImg();
}
function onClickImg3() {
    let img = document.getElementById('img3');
    if (img.src.match('panda_swap_part3x1.jpg')) {
        img.src = 'funny-cat1_part3x1.jpg';
        animal_3 = 'cat';
    } else if (img.src.match('funny-cat1_part3x1.jpg')) {
        img.src = 'monkey_part3x1.jpg';
        animal_3 = 'monkey';
    } else {
        img.src = 'panda_swap_part3x1.jpg';
        animal_3 = 'panda';
    }
    checkImg();
}
function onClickImg4() {
    let img = document.getElementById('img4');
    if (img.src.match('funny-cat1_part4x1.jpg')) {
        img.src = 'panda_swap_part4x1.jpg';
        animal_4 = 'panda';
    } else if (img.src.match('panda_swap_part4x1.jpg')) {
        img.src = 'monkey_part4x1.jpg';
        animal_4 = 'monkey';
    } else {
        img.src = 'funny-cat1_part4x1.jpg';
        animal_4 = 'cat';
    }
    checkImg();
}
function onClickImg5() {
    let img = document.getElementById('img5');
    if (img.src.match('monkey_part5x1.jpg')) {
        img.src = 'panda_swap_part5x1.jpg';
        animal_5 = 'panda';
    } else if (img.src.match('panda_swap_part5x1.jpg')) {
        img.src = 'funny-cat1_part5x1.jpg';
        animal_5 = 'cat';
    } else {
        img.src = 'monkey_part5x1.jpg';
        animal_5 = 'monkey';
    }
   checkImg();
}
