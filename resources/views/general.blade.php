@extends('index')

@section('content')
<div class="main">
    <div class="score">
        <div class="firstPlayer">
            <p id="firstPlayer">Pierwszy gracz</p>
            <p class="score js-scoreFirstPlayer"></p>
        </div>
        <div class="secondPlayer">
            <p id="secondPlayer">Drugi gracz</p>
            <p class="score js-scoreSecondPlayer"></p>
        </div>
    </div>
    <div class="first js-score" data-score="0">
        <div class="second60 js-score" data-score="60">
            <div class="third20 js-score" data-score="20">
                <div class="four40 js-score" data-score="40">
                    <div class="five10 js-score" data-score="10">
                        <div class="six25 js-score" data-score="25">
                            <div class="seven50 js-score" data-score="50">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    <meta name="csrf-token" content="{{ csrf_token() }}" />
@endsection