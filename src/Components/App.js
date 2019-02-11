import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';

const uuidv1 = require('uuid/v1');

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hienThiForm: true,
			data: DataUser,
			searchText: '',
			editUserStatus: false,
			userEditObject:{}
		};
	}

	changeEditUserStatus = () => {
		this.setState({
			editUserStatus: !this.state.editUserStatus
		});
	};

	doiTrangThai = () => {
		this.setState({
			hienThiForm: !this.state.hienThiForm
		});
	};

	editUser = (user) => {
		console.log('Da ket noi thanh cong');
		this.setState({
			userEditObject: user
		})
		console.log(user);
	};

	getNewUserData = (name, tel, Permission) => {
		var item = {};
		item.id = uuidv1();
		item.name = name;
		item.tel = tel;
		item.Permission = Permission;
		var items = this.state.data;
		items.push(item);
		this.setState({
			data: items
		});

		console.log(this.state.data);
	};

	getTextSearch = (dl) => {
		this.setState({
			searchText: dl
		});
	};

	render() {
		var ketqua = [];
		this.state.data.forEach((item) => {
			if (item.name.indexOf(this.state.searchText) !== -1) {
				ketqua.push(item);
			}
		});
		return (
			<div>
				<Header />
				<div className="searchForm">
					<div className="container">
						<div className="row">
							<Search
							userEditObject={this.state.userEditObject}
								checkConnectProps={(dl) => this.getTextSearch(dl)}
								ketNoi={() => this.doiTrangThai()}
								hienThiForm={this.state.hienThiForm}
								editUserStatus={this.state.editUserStatus}
								changeEditUserStatus={() => this.changeEditUserStatus()}
							/>
							<TableData
								editFun={(user) => this.editUser(user)}
								dataUserProps={ketqua}
								changeEditUserStatus={() => this.changeEditUserStatus()}
							/>
							<AddUser
								add={(name, tel, Permission) => this.getNewUserData(name, tel, Permission)}
								hienThiForm={this.state.hienThiForm}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
