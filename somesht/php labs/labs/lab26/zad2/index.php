<?php	
if(isset($_POST['submit'])){
    $score = 0;

    if ($_POST['arr1'] == 3) $score++;

    $temp = "";
    foreach($_POST['check_list'] as $selected)
        $temp=$temp.$selected;
    if ($temp == "23") $score++;
    if ($_POST['select'] == 4) $score++;

    $arr = array("red","yellow", "yellow", "green");
    echo "<style>body{background:".$arr[$score].";}</style>";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>lab 26</title>
</head>
<body>
    <form style="width: 610px;" action="#" method="post">
        <ol>
            <li>
                <span>Бак заполняется водой через две трубы за 6. 
                Одна первая труба заполняет его за 18 часов. За какое время может заполнить бак одна труба?</span>
                <ul class="ul" style="list-style-type: none; padding-left: 0px; padding-bottom: 20px; padding-top: 20px;">
                    <li><input type="radio" name="arr1" value="1">11 часов</li>
                    <li><input type="radio" name="arr1" value="2">10 часов</li>
                    <li><input type="radio" name="arr1" value="3">9 часов</li>
                    <li><input type="radio" name="arr1" value="4">8,8 часов</li>
                    <li><input type="radio" name="arr1" value="5">9,8 часов</li>
                </ul>
            </li>
            <li style="color: black;"><span >Укажите целые числа:</span>
                <ul class="check" style="list-style-type: none; padding-left: 0px; padding-bottom: 20px; padding-top: 20px;">
                    <li><input type="checkbox" name="check_list[]" value="1">2,8</li>
                    <li><input type="checkbox" name="check_list[]" value="2">11</li>
                    <li><input type="checkbox" name="check_list[]" value="3">14</li>
                    <li><input type="checkbox" name="check_list[]" value="4">17,1</li>
                </ul>
            </li>
            <li>
                <span>Если x=100 и у=120, то значения выражения равны:</span>
                <br><img src="Снимок.PNG" alt="yravnenie">
                <br><select id="3" name = "select">
                    <option>4</option>
                    <option>5</option>
                    <option>1</option>
                    <option>3</option>
                    <option>2</option>
                </select>
            </li>
        </ol>
        <input type="submit" name="submit" value="Узнать результат" />
    </form>
</body>
</html>