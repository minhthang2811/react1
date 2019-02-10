import React, { Component } from 'react';

class Search extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			tempValue:''
		}
	}
	

	isChange = (event) => {
		this.setState({
			tempValue:event.target.value
		});
		this.props.checkConnectProps(this.state.tempValue)
	}

	hienThiNut = () => {
		if (this.props.hienThiForm === true) {
			return (
				<div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()}>
					Đóng lại
				</div>
			);
		} else {
			return (
				<div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()}>
					Thêm mới
				</div>
			);
		}
	};

	render() {
		return (
			<div className="col-12">
				<div className="form-group">
					<div className="btn-group">
						<input type="text" className="form-control" onChange={(event) => this.isChange(event)} placeholder="Nhập từ khóa tìm kiếm" />
						<div className="btn btn-info" onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)} >Tìm kiếm</div>
					</div>
					<div className="btn-group1">
					{this.hienThiNut()}
					</div>
				</div>
				<hr />
			</div>
		);
	}
}

export default Search;
