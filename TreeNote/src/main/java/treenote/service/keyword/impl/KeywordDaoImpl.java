package treenote.service.keyword.impl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import treenote.domain.Keyword;
import treenote.service.keyword.KeywordDao;

@Repository("keywordDaoImpl")
public class KeywordDaoImpl implements KeywordDao {

	/// Field
	@Autowired
	@Qualifier("sqlSessionTemplate")
	private SqlSession sqlSession;

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	/// Constructor
	public KeywordDaoImpl() {
		System.out.println(this.getClass());
	}

	@Override
	public void addKeyword(Keyword keyword) throws Exception {
		// TODO Auto-generated method stub

	}

	@Override
	public int updateKeyword(Keyword keyword) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void removeKeyword(Keyword Keyword) throws Exception {
		// TODO Auto-generated method stub

	}

	@Override
	public List<Keyword> listKeyword(String keyword) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Keyword copyKeyword(Keyword keyword) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Keyword getKeyword(int keywordNo) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}