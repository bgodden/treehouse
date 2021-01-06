class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

    /**
     * Creates token objects for player
     * @param     {number}    num - Number of token objects to be created
     * @returns   {Array}     An array of the newly created token objects
     */
    createTokens(num) {
        const tokens = [];

        for (let i = 0; i <= num; i++) {
            let token = new Token(i, this);
            tokens.push(token);
        }
        return tokens;
    }

    /**
     * Gets unused tokens for a given player
     * @return {array} Array of used tokens
     */
    get unusedTokens () {
        return this.tokens.filter(token => !token.dropped);

    }

    /**
     * Returns first token in unusedTokens array
     * @return {Object} First token object of unusedTokens array
     */
    get activeToken() {
        return this.unusedTokens[0];
    }

    /**
     * Check if a player has any undropped tokens left
     * @return {Boolean}
     */
    checkTokens() {
        return this.unusedTokens == 0 ? false : true;
    }

}