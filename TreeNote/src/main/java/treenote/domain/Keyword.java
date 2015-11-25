package treenote.domain;

public class Keyword {
	private int keywordNo;
	private int treeNo;
	private int ownerUserNo;
	private String keyword;
	private boolean collapse;
	private int parentNo;

	public int getKeywordNo() {
		return keywordNo;
	}

	public void setKeywordNo(int keywordNo) {
		this.keywordNo = keywordNo;
	}

	public int getTreeNo() {
		return treeNo;
	}

	public void setTreeNo(int treeNo) {
		this.treeNo = treeNo;
	}

	public int getOwnerUserNo() {
		return ownerUserNo;
	}

	public void setOwnerUserNo(int ownerUserNo) {
		this.ownerUserNo = ownerUserNo;
	}

	public String getKeyword() {
		return keyword;
	}

	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}

	public boolean isCollapse() {
		return collapse;
	}

	public void setCollapse(boolean collapse) {
		this.collapse = collapse;
	}

	public int getParentNo() {
		return parentNo;
	}

	public void setParentNo(int parentNo) {
		this.parentNo = parentNo;
	}

	@Override
	public String toString() {
		return "Keyword [keywordNo=" + keywordNo + ", treeNo=" + treeNo + ", ownerUserNo=" + ownerUserNo + ", keyword="
				+ keyword + ", collapse=" + collapse + ", parentNo=" + parentNo + "]";
	}
}
