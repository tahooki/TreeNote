package treenote.domain;

public class Tree {
	private int treeNo;
	private int userNo;
	private String Title;

	public int getTreeNo() {
		return treeNo;
	}

	public void setTreeNo(int treeNo) {
		this.treeNo = treeNo;
	}

	public int getUserNo() {
		return userNo;
	}

	public void setUserNo(int userNo) {
		this.userNo = userNo;
	}

	public String getTitle() {
		return Title;
	}

	public void setTitle(String title) {
		Title = title;
	}

	@Override
	public String toString() {
		return "Tree [treeNo=" + treeNo + ", userNo=" + userNo + ", Title=" + Title + "]";
	}
}
