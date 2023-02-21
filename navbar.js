function navbar(){
    document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">')
    document.writeln('<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-bottom navbar-light bg-light">');
    document.writeln(' <div class="container-fluid">');
    document.writeln('  <a class="navbar-brand" href="index.html">介紹</a>');
    document.writeln(' <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">');
    document.writeln(' <span class="navbar-toggler-icon"></span>');
    document.writeln(' </button>');
    document.writeln('  <div class="collapse navbar-collapse" id="navbarSupportedContent">');
    document.writeln('   <ul class="navbar-nav me-auto mb-2 mb-lg-0">');
    document.writeln(' <li class="nav-item">');
    document.writeln(' <a class="nav-link active" aria-current="page" href="use_method.html">遊戲玩法</a>');
    document.writeln('  </li>');
    document.writeln('    <li class="nav-item">');
    document.writeln('   <a class="nav-link active" href="education_content.html">拼音教學</a>');
    document.writeln('  </li>');
    document.writeln('    <li class="nav-item">');
    document.writeln('<a class="nav-link active" href="readyPage.html">遊戲</a>');
    document.writeln('</li>');
    document.writeln('<li>');
    document.writeln('</li>');
    document.writeln('<a class="nav-link active" href="comment.html">意見</a>');
    document.writeln('</div>');
    document.writeln(' </div>');
    document.writeln('</nav>');
}