const fs = require("fs")
const chalk = require("chalk")


global.reloadFile = (file, options = {}) => {
    nocache(file, module => console.log(`File "${file}" has updated`))
}


// Rest Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Apikey',
}

// Other
global.mess = (type, m) => {
    let msg = {
        owner: 'لا يمكن استخدام هذا الأمر إلا من قبل المالك!',
        group: 'لا يمكن استخدام هذا الأمر إلا في مجموعات!',
        private: 'لا يمكن استخدام هذا الأمر إلا في الدردشة الخاصة!',
        admin: 'للمشرف فقط!',
        botAdmin: 'أحتاج أن أصبح مشرفا لتفعيل الميزة',
        bot: 'ْ',
        dead: 'هذه الميزة معطلة حاليا!',
        media: 'Reply media',
        error: "No Results Found"
    }[type]
    if (msg) return m.reply(msg)
}
global.options = {
    autoRead: true,
    mute: false,
    public: true
}
global.owner = ["212713248554","212713248554"]
global.sessionName = "vxvxdsk"
global.packname = "ْ"
global.author = "𝘷𝘹𝘷𝘹𝙙𝙨𝙠៹."


function nocache(module, cb = () => {}) {
    //console.log(chalk.whiteBright(`Load File "${module}"`))
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update File "${file}"`))
})
