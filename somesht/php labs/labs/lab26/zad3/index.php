<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>zad 3</title>
</head>
<body style="display: flex; justify-content: center; font-family: Georgia, 'Times New Roman', Times, serif; font-size: 23px;">
    <form style="width: 600px; height: 500px; background: pink;" action="#" method="post">
        <span>Калькулятор нахождения площади параллелограмма</span>
        <ol>
            <li style="margin-bottom: 30px;">
                <span>Выберите известные параметры:</span><br />
                <input type="checkbox" name="check_list[]" value="0" ><span> значение стороны a</span><br />
                <input type="checkbox" name="check_list[]" value="1" ><span> значение стороны b</span> <br />
                <input type="checkbox" name="check_list[]" value="2" ><span> высота, проведенная к стороне a</span><br />
                <input type="checkbox" name="check_list[]" value="3" ><span> угол между сторонами</span><br />
            </li>
            <li>
                <span>Введите значения</span><br />
                <input placeholder="сторона a" name="i0"><br />
                <input placeholder="сторона b" name="i1"><br />
                <input placeholder="высота h" name="i2"><br />
                <input placeholder="угол между сторонами" name="i3"><br />
            </li>
        </ol>
        <input type="submit" name="submit" style="font-size: 20px; margin-left: 40px;" value = "Узнать результат"><br />
        <div style="margin: 20px 0 0 40px;">
            <span>Площади параллелограмма:</span>
            <input id="out">
        </div>
    </form>
</body>
</html>

<?php	
if(isset($_POST['submit'])){
    $rightOnes = array(false,false,false,false);
    foreach($_POST['check_list'] as $selected)
        $rightOnes[$selected] = true;

    $isValid = true;
    $Answer = 0;

    if($rightOnes[0])
    {
        $temp = $_POST['i0'];
        if($temp=="") $isValid = false;
        $a = (int)$temp;
        if($isValid && $rightOnes[2])
        {
            $temp = $_POST['i2'];
            if($temp=="") $isValid = false;
            $height = (int)$temp;
            $Answer = $height*$a;
        }else if($rightOnes[1] && $rightOnes[3])
        {
            $temp = $_POST['i1'];
            if($temp=="") $isValid = false;
            $temp1 = $_POST['i3'];
            if($temp=="") $isValid = false;
            $angle = (int)$temp1;
            $b = (int)$temp;
            $Answer = $a*$b*sin($angle);
        }
    } else $isValid = false;

    if($isValid)
        echo "<script>document.getElementById('out').value = ".$Answer.";</script>";
    else
        echo "<script>document.getElementById('out').value = 'Error!';</script>";
}
?>