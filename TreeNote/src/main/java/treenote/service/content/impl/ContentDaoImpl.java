package treenote.service.content.impl;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import treenote.domain.Content;
import treenote.service.content.ContentDao;

@Repository("contentDaoImpl")
public class ContentDaoImpl implements ContentDao {

	/// Field
	@Autowired
	@Qualifier("sqlSessionTemplate")
	private SqlSession sqlSession;

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	/// Constructor
	public ContentDaoImpl() {
		System.out.println(this.getClass());
	}

	@Override
	public void addContent(Content content) throws Exception {
		// TODO Auto-generated method stub

	}

	@Override
	public void removeContent(int contentNo) throws Exception {
		// TODO Auto-generated method stub

	}

	@Override
	public int updateContent(Content content) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Content getContent(int contentNo) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Content copyContent(int contentNo) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}