package treenote.service.tree.impl;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import treenote.domain.Tree;
import treenote.service.tree.TreeDao;

@Repository("treeDaoImpl")
public class TreeDaoImpl implements TreeDao {

	/// Field
	@Autowired
	@Qualifier("sqlSessionTemplate")
	private SqlSession sqlSession;

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	/// Constructor
	public TreeDaoImpl() {
		System.out.println(this.getClass());
	}

	@Override
	public void addTree(Tree tree) throws Exception {
		// TODO Auto-generated method stub

	}

	@Override
	public int updateTitle(String title) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void removeTree(int treeNo) throws Exception {
		// TODO Auto-generated method stub

	}

	@Override
	public void getTree(int treeNo) throws Exception {
		// TODO Auto-generated method stub

	}

	@Override
	public void listTree(int userNo) throws Exception {
		// TODO Auto-generated method stub

	}

}