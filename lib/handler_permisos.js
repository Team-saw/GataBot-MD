const botPermisos = (plugins, plugin, _user, noPrefix, m, isROwner, isOwner, isAdmin, isBotAdmin, isMods, isPrems, fail, _prefix) => {
let hl = _prefix 
let adminMode = global.db.data.chats[m.chat].modoadmin
let gata = `${plugins.botAdmin || plugins.admin || plugins.group || plugins || noPrefix || hl ||  m.text.slice(0, 1) == hl || plugins.command}`
if (adminMode && !isOwner && !isROwner && m.isGroup && !isAdmin && gata) return   

if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Propietarios y Bot Owner
fail('owner', m, this)
continue
}
if (plugin.rowner && !isROwner) { // Bot Owner
fail('rowner', m, this)
continue
}
if (plugin.owner && !isOwner) { // Propietarios
fail('owner', m, this)
continue
}
if (plugin.mods && !isMods) { // Moderadores 
fail('mods', m, this)
continue
}
if (plugin.premium && !isPrems) { // Premium
fail('premium', m, this)
continue
}
if (plugin.group && !m.isGroup) { // Grupos
fail('group', m, this)
continue
} else if (plugin.botAdmin && !isBotAdmin) { // Admin Bot Owner 
fail('botAdmin', m, this)
continue
} else if (plugin.admin && !isAdmin) { // Admins
fail('admin', m, this)
continue
}
if (plugin.private && m.isGroup) { // para privados
fail('private', m, this)
continue
}
if (plugin.register == true && _user.registered == false) { // registro de usuarios
fail('unreg', m, this)
continue
}
}
export default { botPermisos } 