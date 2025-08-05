/*
Project Name : DADA_18
Creator      : NAYAN SINGH Mr ( DADA )
Repo         : https://github.com/nayan202254/DADA-18
Support      : wa.me/919051966938
*/

const config = require('../settings');
const { malvin } = require('../malvin');
const { runtime } = require('../lib/functions');

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

malvin({
    pattern: "support",
    alias: ["follow", "links"],
    desc: "Display support and follow links",
    category: "main",
    react: "📡",
    filename: __filename
}, 
async (conn, mek, m, {
    from, reply, pushname
}) => {
    try {
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const uptimeFormatted = runtime(process.uptime());

        const message = `
╭─『 *LUCKY-XD SUPPORT* 』─
│ 👤 *Developer* : Mr Lucky 🇺🇬
│ ⚙️ *Mode*      : ${config.MODE}
│ ⏱️ *Uptime*    : ${uptimeFormatted}
│ 💠 *Prefix*    : ${config.PREFIX}
│ 🔖 *Version*   : ${config.version}
│ 🕰️ *Time*      : ${currentTime}
╰─────────────

📢 *Follow & Support LUCKY XD* ${readMore}

🔔 *instagram id*
https://www.instagram.com/nayan_s03?igsh=c2l2cDMybTg1N28=
👨‍💻 *Developer Contact*
wa.me/919051966938?text=Hi%20Lucky,%20I%20need%20support!

>💡Powered By Lucky Tech Hub
        `.trim();

        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/4itzeu.jpg' },
            caption: message,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363420656466131@newsletter',
                    newsletterName: '🪀『 NAYAN 』🪀',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Support Cmd Error:", e);
        reply(`⚠️ An error occurred:\n${e.message}`);
    }
});
