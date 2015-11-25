package treenote.service.tree.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import treenote.domain.Tree;
import treenote.service.content.ContentDao;
import treenote.service.keyword.KeywordDao;
import treenote.service.tree.TreeDao;
import treenote.service.tree.TreeService;;

@Service("treeServiceImpl")
public class TreeServiceImpl implements TreeService {

	/// Field
	@Autowired
	@Qualifier("treeDaoImpl")
	private TreeDao treeDao;

	@Autowired
	@Qualifier("keywordDaoImpl")
	private KeywordDao keywordDao;

	@Autowired
	@Qualifier("contentDaoImpl")
	private ContentDao contentDao;

	public void setTreeDao(TreeDao treeDao) {
		this.treeDao = treeDao;
	}

	public void setKeywordDao(KeywordDao keywordDao) {
		this.keywordDao = keywordDao;
	}

	public void setContentDao(ContentDao contentDao) {
		this.contentDao = contentDao;
	}

	/// Constructor
	public TreeServiceImpl() {
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