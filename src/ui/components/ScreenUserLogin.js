var m = require('mithril');


var domain = require('./../../domain');
var Link = require('./Link');
var UserLoginForm = require('./UserLoginForm');
var ListErrors = require('./ListErrors');


function onupdate() {
	if (domain.store.user) {
		m.route.set('/');
	}
}


function view() {
	return m('div',
		[
			m('.container.page', [
				m('.row', [
					m('.col-md-6.offset-md-3.col-xs-12', [
						m('h1.text-xs-center', 'Sign In'),
						m('p.text-xs-center',
							m(Link, { to: '/register' }, 'Need an account?')
						),
						m(ListErrors, { errors: domain.store.userLoginErrors }),
						m(UserLoginForm, { isUserLoginBusy: domain.store.isUserLoginBusy })
					])
				])
			])
		]
	);
};


module.exports = {
	onupdate: onupdate,
	view: view
};
