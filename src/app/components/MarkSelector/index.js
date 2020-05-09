import React from "react";
import { Tag, Input, Tooltip } from "antd";
import { Plus } from "react-feather";
import { TagSearchBar } from "app/components/SearchBar";
import "./styles.sass";

const hues = [
	"magenta",
	"red",
	"volcano",
	"orange",
	"gold",
	"lime",
	"green",
	"cyan",
	"blue",
	"geekblue",
	"purple",
];
class MarkSelector extends React.Component {
	state = {
		tags: [],
		inputVisible: false,
	};

	handleClose = (removedTag, color) => {
		hues.push(color);
		const tags = this.state.tags.filter((tag) => tag !== removedTag);
		console.log(tags);
		this.setState({ tags });
	};

	showInput = () => {
		this.setState({ inputVisible: true });
	};

	onSelectHandler = (newTag) => {
		if (newTag) {
			let isSelected = this.state.tags.find(
				(elem) => elem.name === newTag.value
			);
			if (!isSelected) {
				let { tags } = this.state;
				tags = [...tags, { name: newTag.value, color: hues.pop() }];
				this.setState({
					tags,
					inputVisible: false,
				});
			} else {
				this.setState({
					inputVisible: false,
				});
			}
		} else {
			this.setState({
				inputVisible: false,
			});
		}
	};

	render() {
		const { tags, inputVisible } = this.state;
		return (
			<div id="markSelector">
				{tags.map((tag, index) => {
					return (
						<Tag
							closable
							className="edit-tag"
							key={tag.name}
							color={tag.color}
							onClose={() => this.handleClose(tag, tag.color)}>
							{tag.name}
						</Tag>
					);
				})}
				{inputVisible && (
					<TagSearchBar
						mainPanel={false}
						onSelect={this.onSelectHandler}
						onBlur={this.onSelectHandler}
					/>
				)}
				{!inputVisible && (
					<Tag className="site-tag-plus" onClick={this.showInput}>
						<Plus size={15} /> New Tag
					</Tag>
				)}
			</div>
		);
	}
}

export default MarkSelector;
