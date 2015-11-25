package treenote.web.content;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import treenote.domain.Content;
import treenote.service.content.ContentService;

@Controller
@RequestMapping("/content/*")
public class ContentController {

	/// Field
	@Autowired
	@Qualifier("contentServiceImpl")
	private ContentService contentService;

	public ContentController() {
		System.out.println(this.getClass());
	}

	//생성
	@RequestMapping(value = "addContent")
	public void addContent(Content content, Model model) throws Exception{
		System.out.println("/addContent");
	}
	//삭제
	@RequestMapping(value = "removeContent/{contentNo}")
	public void removeContent(int contentNo, Model model) throws Exception{
		System.out.println("/removeContent");
	}
	//내용수정
	@RequestMapping(value = "updateContent")
	public void updateContent(Content content, Model model) throws Exception{
		System.out.println("/updateContent");
	}
	//불러오기
	@RequestMapping(value = "getContent/{contentNo}")
	public void getContent(int contentNo, Model model) throws Exception{
		System.out.println("/getContent");
	}
	
}