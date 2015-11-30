package treenote.web.keyword;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import treenote.domain.Keyword;
import treenote.service.keyword.KeywordService;

@Controller
@RequestMapping("/keyword/*")
public class KeywordController {

	/// Field
	@Autowired
	@Qualifier("keywordServiceImpl")
	private KeywordService keywordService;

	public KeywordController() {
		System.out.println(this.getClass());
	}

	// 추가
	@RequestMapping(value = "addKeyword")
	public void addKeyword(Keyword keyword, Model model) throws Exception {
		System.out.println("/addKeyword");
		model.addAttribute("keyword", keywordService.addKeyword(keyword));
	}

	// 수정
	@RequestMapping(value = "updateKeyword")
	public void updateKeyword(Keyword keyword, Model model) throws Exception {
		System.out.println("/updateKeyword");
		keywordService.updateKeyword(keyword);
	}

	// 삭제
	@RequestMapping(value = "removeKeyword")
	public void removeKeyword(Keyword Keyword, Model model) throws Exception {
		System.out.println("/removeKeyword");
		keywordService.removeKeyword(Keyword);
	}

	// 해당 키워드 리스트 불러오기
	@RequestMapping(value = "listTimeLineKeyword/{keyword}")
	public void listTimeLineKeyword(String keyword, Model model) throws Exception {
		System.out.println("/listKeyword");
		keywordService.listTimeLineKeyword(keyword);
	}

	// 자식 키워드 불러오기
	@RequestMapping(value = "listChildKeyword/{keywordNo}")
	public void listChildKeyword(int keywordNo, Model model) throws Exception {
		System.out.println("/listChildKeyword");
		List<Keyword> list = keywordService.listChildKeyword(keywordNo);
		//class:??? array:???
		model.addAttribute("listChildKeyword", list);
	}

	// 키워드 복사
	@RequestMapping(value = "copyKeyword")
	public void copyKeyword(Keyword keyword, Model model) throws Exception {
		System.out.println("/copyKeyword");
		keywordService.copyKeyword(keyword);
	}

}