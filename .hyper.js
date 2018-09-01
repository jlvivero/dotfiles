//future versions of hyper may add aditional config options,
//which will not automatically be merged into this file
//see https://hyper.is#cfg for all currently supported options
//
module.exports = {
    config: {
        updateChannel: 'stable',

        fontSize: 14,

        //font family with optional fallbacks
        fontFamily: '"Fira Code", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

        //normal or bold
        fontWeight: 'normal',

        fontWeightBold: 'bold',

        //terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
        cursorColor: 'rgba(248,28,229,0.8)',

        //terminal text color under block cursor
        cursorAccentColor: '#000',

        //Beam for | and UNDERLINE for _ BLOCK for block...
        cursorShape: 'BLOCK',

        cursorBlink: false,

        //color of the text
        foregroundColor: '#f8f8f2',
		
        //terminal background color
        //opacity is only supported on macOS
        backgroundColor: '#272822',

        //terminal selection color
        selectioColor: 'rgba(248,28,229,0.3)',

        //border color (window, tabs)
        borderColor: '#1df9ca',

        //custom CSS to embed in the main window
        //this does not work anymore :(
        css: 'x-screen x-row { font-variant-ligatures: contextual;}',

        //custom css to embed in the terminal window
        //doesn't work either
        termCSS: 'x-screen x-row {font-variant-ligatures: initial;}',

        //if you're using a linux setup which shows native menus, set to false
        //default: `true` on Linux, `true` on windows, ignored on macos
        showHamburgerMenu: '',

        //set to false if you want to hide the minimize, maximize and close buttons
        //aditionally set to 'left if you want them on the left, ike in ubuntu
        //default: true on windows and linux, ignored on macOS
        showWindowControls: '',

        //custom padding (Css format, ie: to right bottom left)
        padding: '15px 15px',

        //the full list. if you're going to provide full color palette,
        //including the 6 x 6 color cubes and the grayscale map, just provide
        //an array here instead of a color map object
        //cyan: username
        //green: hostname
        //lightYellow is the file path on MacOS
        colors: {
            black: '#000000',
            red: '#F92672',
            green: '#A6E22E',
            yellow '#FFE792',
            blue: '#66D9EF',
            magenta: '#AE81FF',
            cyan: '#F92672',
            white: '#F8F8F2',
            lightBlack: '#686868',
            lightRed: '#F2672',
			lightGreen: '#A6E22E',
            lightYellow: '#FFE792',
            lightBlue: '#66D9EF',
            lightMagenta: '#AE81FF',
            lightCyan: '#66D9EF',
            lightWhite: '#F8F8F2'
        },
        //shell to run when spawning a new session
        //if left empty your systmems login shell will  be the default
        //example:
        //bash on windows
        //`C:\\Windows\\System32\\bash.exe`
        shell: '',
        
        shellArgs: ['--login'],

        //for environment variables
        env: {},

        //set to 'false' for no bell
        bell: 'SOUND',

        //if true selected text will automatically be copied to the clipboard
        copyOnSelect: true,

        //if true hyper will be set as the default protocl client for ssh
        defaultSSHApp: true,

        //quickEdit: true,
        //for advanced config flags please refer to https://hyper.is/#cfg
    },
    //a list of plugins to fetch and install from npm
    plugins: ['hyper-pane'],
    localPlugins:[],
    keymap: {
            //example
            //windows:devtools: cmd+alt+o
    }
}
