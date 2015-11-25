package treenote.service.keyword.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import treenote.domain.Keyword;
import treenote.service.content.ContentDao;
import treenote.service.keyword.KeywordDao;
import treenote.service.keyword.KeywordService;;

@Service("keywordServiceImpl")
public class KeywordServiceImpl implements KeywordService {

	/// Field
	@Autowired
	@Qualifier("keywordDaoImpl")
	private KeywordDao keywordDao;

	@Autowired
	@Qualifier("contentDaoImpl")
	private ContentDao contentDao;

	public void setKeywordDao(KeywordDao keywordDao) {
		this.keywordDao = keywordDao;
	}

	public void setContentDao(ContentDao contentDao) {
		this.contentDao = contentDao;
	}

	/// Constructor
	public KeywordServiceImpl() {
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
	public List<Keyword> listChildKeyword(Keyword keyword) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Keyword copyKeyword(Keyword keyword) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}