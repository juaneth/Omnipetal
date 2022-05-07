const os = require("os");

if (os.platform() == "darwin") {
    let titlebar = document.getElementById('macOS-titlebar');

    titlebar.classList.add('bg-zinc-800')
    titlebar.classList.add('h-7')
    titlebar.classList.add('w-screen')
    titlebar.classList.add('draggable')
    titlebar.classList.add('border-solid')
    titlebar.classList.add('border-b')
    titlebar.classList.add('border-slate-600')
    titlebar.classList.add('topbar')
}