package treenote.domain;

public class Tree {
	private int treeNo;
	private int userNo;
	private String title;

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
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	@Override
	public String toString() {
		return "Tree [treeNo=" + treeNo + ", userNo=" + userNo + ", Title=" + title + "]";
	}
}
