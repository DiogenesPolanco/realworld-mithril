'use strict';


var m = require('mithril');


var domain = require('./../../domain');


function view(vnode) {
	return [
		m('span',
			m('button.btn.btn-sm.btn-secondary', { onclick: domain.actions.followUser.bind(null, vnode.attrs.username) }, [
				m('i.ion-plus-round'), m('span', ' Follow ' + vnode.attrs.username)
			])
		)
	];
};


module.exports = {
	view: view
};
