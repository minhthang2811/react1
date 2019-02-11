import React, { Component } from 'react';

class EditUser extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id : this.props.userEditObject.id,
			name : this.props.userEditObject.name,
			tel : this.props.userEditObject.tel,
			Permission : this.props.userEditObject.Permission

		}
	}
	

	isChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({
			[name]: value
		});
	}

	render() {
		return (
			<div className="row">
				<div className="col-12">
					<form method="post">
						<div className="card text-white bg-warning mb-3 mt-2">
							<div className="card-header text-center">Sửa thông tin user trong hệ thống</div>
							<div className="card-body text-primary">
								<div className="form-group">
									<input onChange={() => this.isChange() } defaultValue={this.props.userEditObject.name} type="text" name="name" className="form-control" placeholder="Tên User" />
								</div>
								<div className="form-group">
									<input defaultValue={this.props.userEditObject.tel} type="text" name="tel" className="form-control" placeholder="Điện thoại" />
								</div>
								<div className="form-group">
									<select defaultValue={this.props.userEditObject.Permission} className="custom-select" name="Permission" required>
										<option value>Chọn quyền mặc định</option>
										<option value={1}>Admin</option>
										<option value={2}>Moderator</option>
										<option value={3}>Normal User</option>
									</select>
								</div>
								<div className="form-group">
									<input type="reset" value="Lưu" className="btn btn-block btn-danger" onClick={() => this.props.changeEditUserStatus()} />
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default EditUser;
