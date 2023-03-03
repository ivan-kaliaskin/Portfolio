const elements = {
    _body: null,
    levelLabels: [],
    quizPage: null,
    _resultPage: null,
    _scoreCounter: null,
    _topBlock: null,
    _topBlockContent: null,
    _topPicture: null,
    _topSound: null,
    _topSoundPlayer: null,
    _answerBlock: null,
    _birdsList: null,
    _nextButton: null,
    _descriptionBlock: null,
    _descriptionBlockContent: null,
    _descriptionPicture: null,
    _descriptionSound: null,
    _descriptionSoundNormalTitle: null,
    _descriptionSoundLatinTitle: null,
    _descriptionText: null,
    _descriptionSoundPlayer: null,

    setLevelLabels(aLabels) {
        this.levelLabels = aLabels
    },
    setQuizPage(oQuizPage) {
        this.quizPage = oQuizPage
    },
    set body(obody) {
        this._body = obody
    },
    get body() {
        return this._body
    },
    set resultsPage(oResultPage) {
        this._resultPage = oResultPage
    },
    get resultsPage() {
        return this._resultPage
    },
    set scoreCounter(oScoreCounter) {
        this._scoreCounter = oScoreCounter
    },
    get scoreCounter() {
        return this._scoreCounter
    },
    set topBlock(oTopBlock) {
        this._topBlock = oTopBlock
    },
    get topBlock() {
        return this._topBlock
    },
    set topBlockContent(oTopBlockContent) {
        this._topBlockContent = oTopBlockContent
    },
    get topBlockContent() {
        return this._topBlockContent
    },
    set topPicture(picture) {
        this._topPicture = picture
    },
    get topPicture() {
        return this._topPicture
    },
    set topSound(oTopSound) {
        this._topSound = oTopSound
    },
    get topSound() {
        return this._topSound
    },
    set topSoundPlayer(oTopSoundPlayer) {
        this._topSoundPlayer = oTopSoundPlayer
    },
    get topSoundPlayer() {
        return this._topSoundPlayer
    },
    set answerBlock(oAnswerBlock) {
        this._answerBlock = oAnswerBlock
    },
    get answerBlock() {
        return this._answerBlock
    },
    set descriptionBlock(oDescriptionBlock) {
        this._descriptionBlock = oDescriptionBlock
    },
    get descriptionBlock() {
        return this._descriptionBlock
    },
    set birdsList(aBirdsList) {
        this._birdsList = aBirdsList
    },
    get birdsList() {
        return this._birdsList
    },
    set nextButton(oNextButton) {
        this._nextButton = oNextButton
    },
    get nextButton() {
        return this._nextButton
    },
    set descriptionBlockContent(oDescriptionBlockContent) {
        this._descriptionBlockContent = oDescriptionBlockContent
    },
    get descriptionBlockContent() {
        return this._descriptionBlockContent
    },
    set descriptionPicture(oDescriptionPicture) {
        this._descriptionPicture = oDescriptionPicture
    },
    get descriptionPicture() {
        return this._descriptionPicture
    },

    set descriptionSound(oDescriptionSound) {
        this._descriptionSound = oDescriptionSound
    },
    get descriptionSound() {
        return this._descriptionSound
    },

    set descriptionSoundNormalTitle(oDescriptionSoundNormalTitle) {
        this._descriptionSoundNormalTitle = oDescriptionSoundNormalTitle
    },
    get descriptionSoundNormalTitle() {
        return this._descriptionSoundNormalTitle
    },

    set descriptionSoundLatinTitle(oDescriptionSoundLatinTitle) {
        this._descriptionSoundLatinTitle = oDescriptionSoundLatinTitle
    },
    get descriptionSoundLatinTitle() {
        return this._descriptionSoundLatinTitle
    },

    set descriptionText(odescriptionText) {
        this._descriptionText = odescriptionText
    },
    get descriptionText() {
        return this._descriptionText
    },

    set descriptionSoundPlayer(oDescriptionSoundPlayer) {
        this._descriptionSoundPlayer = oDescriptionSoundPlayer
    },
    get descriptionSoundPlayer() {
        return this._descriptionSoundPlayer
    },
}

export default elements