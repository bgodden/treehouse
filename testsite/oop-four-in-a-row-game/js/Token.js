class Token {
    constructor(index, owner) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
        this.columnLocation = 0;
    }

    // Getters
    get htmlToken () {
        return document.getElementById(this.id);
    }

    /**
     * Gets left offset of html element.
     * @return  {number}   Left offset of token object's htmlToken.
     */
    get offsetLeft () {
        return this.htmlToken.offsetLeft;
    }

    drawHTMLToken () {
        const htmlToken = document.createElement('div');
        document.getElementById('game-board-underlay').appendChild(htmlToken);
        htmlToken.setAttribute('id', this.id);
        htmlToken.setAttribute('class', 'token');
        htmlToken.style.backgroundColor = this.owner.color;
    }

    /**
     * Moves html token one column to right.
     * @param   {number}    columns - number of columns in the game board
     */
    moveRight(columns) {
        if(this.columnLocation < columns - 1) {
            this.htmlToken.style.left = this.offsetLeft + 76;
            this.columnLocation++;
        }
    }

    /**
     * Moves html token one column to left.
     */
    moveLeft() {
        if(this.columnLocation > 0) {
            this.htmlToken.style.left = this.offsetLeft - 76;
            this.columnLocation--;
        }
    }

    /**
     * Drops html token into targeted board space.
     * @param   {Object}   target - Targeted space for dropped token.
     * @param   {function} reset  - The reset function to call after the drop animation has completed.
     */
    drop(target, reset) {
        this.dropped = true;

        $(this.htmlToken).animate({
            top: (target.y * target.diameter)
        }, 750, 'easeOutBounce', reset);
    }

}