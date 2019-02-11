import React, { Component } from 'react';

class TableDataRow extends Component {
	permissionShow = () => {
		if (this.props.permission === 1) {
			return 'Admin';
		} else if (this.props.permission === 2) {
			return 'Moderator';
		} else {
			return 'Normal User';
		}
	};

	editClick = () => {
		this.props.editFunClick();
		this.props.changeEditUserStatus();
	}

	render() {
		return (
			<tr>
				<td>{this.props.stt + 1}</td>
				<td>{this.props.userName}</td>
				<td>{this.props.tel}</td>
				<td> {this.permissionShow()} </td>
				<td>
					<div className="btn-group">
						<div onClick={() => this.editClick()} className="btn btn-warning sua">
							<i className="fa fa-edit" /> Sửa
						</div>
						<div className="btn btn-danger xoa">
							<i className="fa fa-trash" /> Xóa
						</div>
					</div>
				</td>
			</tr>
		);
	}
}

export default TableDataRow;
