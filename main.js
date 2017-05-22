// write your code here to make the tests pass
function TennisGame(name1, name2, playerOneScore=0, playerTwoScore=0) {
    this.playerOne = name1;
    this.playerTwo = name2;
    this.playerOneScore = playerOneScore;
    this.playerTwoScore = playerTwoScore;
    this.playerOneScores = function() {
        this.playerOneScore+=1;
    };
    this.playerTwoScores = function() {
        this.playerTwoScore+=1;
    };
    this.isDeuce = function()   {
        if((this.playerOneScore==3)&&(this.playerOneScore===this.playerTwoScore))   {
            return true;
        }
        else{
            return false;
        }
    };
    this.playerWithHighestScore = function()   {
        if(this.playerOneScore>this.playerTwoScore) {
            return this.playerOne;
        }
        else    {
            return this.playertwo;
        }
    };
    this.hasWinner = function() {
        if((this.playerOneScore>3 && this.playerOneScore-this.playerTwoScore>1)||(this.playerTwoScore>3 && this.playerTwoScore-this.playerOneScore>1))    {
            return true;
        }
        else    {
            return false;
        }
    };
    this.hasAdvantage = function()  {
        if(this.playerOneScore===this.playerTwoScore)   {
            return false;
        }
        else    {
            return true;
        }
    };
    this.translateScore = function(score)    {
        if(score===0)  {
            return 'Love';
        }
        else if (score===1) {
            return 'Fifteen';
        }
        else if (score===2) {
            return 'Thirty';
        }
        else    {
            return 'Forty'
        }
    };
    this.getScore = function()  {
        if(this.playerOneScore>3&&this.playerOneScore-this.playerTwoScore>1)    {
            return this.playerOne + ' wins';
        }
        else if(this.playerTwoScore>3&&this.playerTwoScore-this.playerOneScore>1)   {
            return this.playerTwo + ' wins';
        }
        else if(this.playerOneScore>3 && this.playerOneScore>this.playerTwoScore)    {
            return ('Advantage ' + this.playerOne);
        }
        else if(this.playerOneScore>3 && this.playerTwoScore>this.playerOneScore)    {
            return ('Advantage ' + this.playerTwo);
        }
        else if(this.playerOneScore>2&&this.playerOneScore===this.playerTwoScore)   {
            return 'Deuce';
        }
        else if(this.playerOneScore===this.playerTwoScore)  {
            return 'Fifteen all';
        }
        else    {
            return (this.translateScore(this.playerOneScore) + ', ' + this.translateScore(this.playerTwoScore));
        }

    }
    
} 