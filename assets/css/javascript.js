function fortLogoZoom() {
    document.getElementById('zoomoutimage').setAttribute("class", "zoomLogocss");
    document.getElementById('backfade').setAttribute("class", "backg");
    document.getElementById('textfade').setAttribute("class", "textfadecss");

    setTimeout(function () {
        document.getElementById('makedash').setAttribute("class", "makedashcss");
        document.getElementById('secondImgShow').setAttribute("class", "secondImgShowcss");

    }, 3000);

}