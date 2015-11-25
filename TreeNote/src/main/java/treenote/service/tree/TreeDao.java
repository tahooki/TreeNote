package treenote.service.tree;

import treenote.domain.Tree;

public interface TreeDao {
	//생성
	public void addTree(Tree tree) throws Exception ;
	//제목수정
	public int updateTitle(String title) throws Exception;
	//삭제
	public void removeTree(int treeNo) throws Exception;
	//불러오기
	public void getTree(int treeNo) throws Exception;
	//트리 리스트 불러오기
	public void listTree(int userNo) throws Exception;
}