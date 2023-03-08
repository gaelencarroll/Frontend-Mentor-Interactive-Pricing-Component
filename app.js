const $slider = $('.slider');
const $numberOfPageviews = $('.num-pageviews.number');
const $priceAmount = $('.price.number');
const $billingSwitch = $('.switch-input');

$slider.change(function(evt){
    if(evt.target.value == 1){
        $numberOfPageviews.text('10K');
        if($billingSwitch.is(':checked')){
            $priceAmount.text('$6.00');
        }
        else{
            $priceAmount.text('$8.00');
        }
    }
    else if(evt.target.value == 2){
        $numberOfPageviews.text('50K');
        if($billingSwitch.is(':checked')){
            $priceAmount.text('$9.00');
        }
        else{
            $priceAmount.text('$12.00');
        }
    }
    else if(evt.target.value == 3){
        $numberOfPageviews.text('100K');
        if($billingSwitch.is(':checked')){
            $priceAmount.text('$12.00');
        }
        else{
            $priceAmount.text('$16.00');
        }
    }
    else if(evt.target.value == 4){
        $numberOfPageviews.text('500K');
        if($billingSwitch.is(':checked')){
            $priceAmount.text('$18.00');
        }
        else{
            $priceAmount.text('$24.00');
        }
    }
    else if(evt.target.value == 5){
        $numberOfPageviews.text('1M');
        if($billingSwitch.is(':checked')){
            $priceAmount.text('$27.00');
        }
        else{
            $priceAmount.text('$36.00');
        }
    }
})

$billingSwitch.change(function(evt){
    if($slider.val() == 1){
        $numberOfPageviews.text('10K');
        if($billingSwitch.is(':checked')){
            $priceAmount.text('$6.00');
        }
        else{
            $priceAmount.text('$8.00');
        }
    }
    else if($slider.val() == 2){
        $numberOfPageviews.text('50K');
        if($billingSwitch.is(':checked')){
            $priceAmount.text('$9.00');
        }
        else{
            $priceAmount.text('$12.00');
        }
    }
    else if($slider.val() == 3){
        $numberOfPageviews.text('100K');
        if($billingSwitch.is(':checked')){
            $priceAmount.text('$12.00');
        }
        else{
            $priceAmount.text('$16.00');
        }
    }
    else if($slider.val() == 4){
        $numberOfPageviews.text('500K');
        if($billingSwitch.is(':checked')){
            $priceAmount.text('$18.00');
        }
        else{
            $priceAmount.text('$24.00');
        }
    }
    else if($slider.val() == 5){
        $numberOfPageviews.text('1M');
        if($billingSwitch.is(':checked')){
            $priceAmount.text('$27.00');
        }
        else{
            $priceAmount.text('$36.00');
        }
    }
})