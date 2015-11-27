
DROP SEQUENCE seq_users_user_no;
DROP SEQUENCE seq_replys_reply_no;
DROP SEQUENCE seq_contents_content_no;
DROP SEQUENCE seq_keywords_keyword_no;
DROP SEQUENCE seq_trees_tree_no;

CREATE SEQUENCE seq_users_user_no       INCREMENT BY 1 START WITH 1000000;
CREATE SEQUENCE seq_replys_reply_no       INCREMENT BY 1 START WITH 1000000;
CREATE SEQUENCE seq_contents_content_no       INCREMENT BY 1 START WITH 1000000;
CREATE SEQUENCE seq_keywords_keyword_no       INCREMENT BY 1 START WITH 1000000;
CREATE SEQUENCE seq_trees_tree_no       INCREMENT BY 1 START WITH 1000000;

/* 리플 */
DROP TABLE REPLYS 
	CASCADE CONSTRAINTS;

/* 키워드 */
DROP TABLE KEYWORDS 
	CASCADE CONSTRAINTS;

/* 친구목록 */
DROP TABLE FRIENDS 
	CASCADE CONSTRAINTS;

/* 회원 */
DROP TABLE USERS 
	CASCADE CONSTRAINTS;

/* 내용 */
DROP TABLE CONTENTS 
	CASCADE CONSTRAINTS;

/* 트리 */
DROP TABLE TREES 
	CASCADE CONSTRAINTS;

/* 리플 */
CREATE TABLE REPLYS (
	REPLY_NO INTEGER NOT NULL, /* 리플일련번호 */
	USER_NO INTEGER NOT NULL, /* 회원일련번호 */
	CONTENT_NO INTEGER NOT NULL, /* 내용일련번호 */
	REPLY VARCHAR2(255) NOT NULL, /* 리플 */
	REG_DATE DATE NOT NULL /* 날짜 */
);

COMMENT ON TABLE REPLYS IS '리플';

COMMENT ON COLUMN REPLYS.REPLY_NO IS '리플일련번호';

COMMENT ON COLUMN REPLYS.USER_NO IS '회원일련번호';

COMMENT ON COLUMN REPLYS.CONTENT_NO IS '내용일련번호';

COMMENT ON COLUMN REPLYS.REPLY IS '리플';

COMMENT ON COLUMN REPLYS.REG_DATE IS '날짜';

CREATE UNIQUE INDEX PK_REPLYS
	ON REPLYS (
		REPLY_NO ASC
	);

ALTER TABLE REPLYS
	ADD
		CONSTRAINT PK_REPLYS
		PRIMARY KEY (
			REPLY_NO
		);

/* 키워드 */
CREATE TABLE KEYWORDS (
	KEYWORD_NO INTEGER NOT NULL, /* 키워드일련번호 */
	TREE_NO INTEGER NOT NULL, /* 트리일련번호 */
	OWNER_USER_NO INTEGER NOT NULL, /* 이전회원일련번호 */
	KEYWORD VARCHAR2(50) NOT NULL, /* 키워드 */
	COLLAPSE INTEGER, /* 확장 */
	PARENT_KEYWORD_NO INTEGER /* 부모키워드일련번호 */
);

COMMENT ON TABLE KEYWORDS IS '키워드';

COMMENT ON COLUMN KEYWORDS.KEYWORD_NO IS '키워드일련번호';

COMMENT ON COLUMN KEYWORDS.TREE_NO IS '트리일련번호';

COMMENT ON COLUMN KEYWORDS.OWNER_USER_NO IS '이전회원일련번호';

COMMENT ON COLUMN KEYWORDS.KEYWORD IS '키워드';

COMMENT ON COLUMN KEYWORDS.COLLAPSE IS '확장';

COMMENT ON COLUMN KEYWORDS.PARENT_KEYWORD_NO IS '부모키워드일련번호';

CREATE UNIQUE INDEX PK_KEYWORDS
	ON KEYWORDS (
		KEYWORD_NO ASC
	);

ALTER TABLE KEYWORDS
	ADD
		CONSTRAINT PK_KEYWORDS
		PRIMARY KEY (
			KEYWORD_NO
		);

/* 친구목록 */
CREATE TABLE FRIENDS (
	USER_NO INTEGER NOT NULL, /* 회원일련번호 */
	USER_NO2 INTEGER NOT NULL /* 회원일련번호2 */
);

COMMENT ON TABLE FRIENDS IS '친구목록';

COMMENT ON COLUMN FRIENDS.USER_NO IS '회원일련번호';

COMMENT ON COLUMN FRIENDS.USER_NO2 IS '회원일련번호2';

CREATE UNIQUE INDEX PK_FRIENDS
	ON FRIENDS (
		USER_NO ASC,
		USER_NO2 ASC
	);

ALTER TABLE FRIENDS
	ADD
		CONSTRAINT PK_FRIENDS
		PRIMARY KEY (
			USER_NO,
			USER_NO2
		);

/* 회원 */
CREATE TABLE USERS (
	USER_NO INTEGER NOT NULL, /* 회원일련번호 */
	EMAIL VARCHAR2(40) NOT NULL, /* 이메일 */
	PASSWORD VARCHAR2(255) NOT NULL, /* 비밀번호 */
	NAME VARCHAR2(50), /* 이름 */
	PHONE VARCHAR2(30), /* 전화번호 */
	PHOTO VARCHAR2(255), /* 사진 */
	SNSUSER VARCHAR2(50) /* 소셜회원 */
);

COMMENT ON TABLE USERS IS '회원';

COMMENT ON COLUMN USERS.USER_NO IS '회원일련번호';

COMMENT ON COLUMN USERS.EMAIL IS '이메일';

COMMENT ON COLUMN USERS.PASSWORD IS '비밀번호';

COMMENT ON COLUMN USERS.NAME IS '이름';

COMMENT ON COLUMN USERS.PHONE IS '전화번호';

COMMENT ON COLUMN USERS.PHOTO IS '사진';

COMMENT ON COLUMN USERS.SNSUSER IS '소셜회원';

CREATE UNIQUE INDEX PK_USERS
	ON USERS (
		USER_NO ASC
	);

ALTER TABLE USERS
	ADD
		CONSTRAINT PK_USERS
		PRIMARY KEY (
			USER_NO
		);

/* 내용 */
CREATE TABLE CONTENTS (
	CONTENT_NO INTEGER NOT NULL, /* 내용일련번호 */
	KEYWORD_NO INTEGER, /* 키워드일련번호 */
	CONTENT CLOB NOT NULL, /* 내용 */
	PHOTO VARCHAR2(255), /* 사진 */
	SCRAP INTEGER, /* 스크랩수 */
	REG_DATE DATE NOT NULL /* 날짜 */
);

COMMENT ON TABLE CONTENTS IS '내용';

COMMENT ON COLUMN CONTENTS.CONTENT_NO IS '내용일련번호';

COMMENT ON COLUMN CONTENTS.KEYWORD_NO IS '키워드일련번호';

COMMENT ON COLUMN CONTENTS.CONTENT IS '내용';

COMMENT ON COLUMN CONTENTS.PHOTO IS '사진';

COMMENT ON COLUMN CONTENTS.SCRAP IS '스크랩수';

COMMENT ON COLUMN CONTENTS.REG_DATE IS '날짜';

CREATE UNIQUE INDEX PK_CONTENTS
	ON CONTENTS (
		CONTENT_NO ASC
	);

ALTER TABLE CONTENTS
	ADD
		CONSTRAINT PK_CONTENTS
		PRIMARY KEY (
			CONTENT_NO
		);

/* 트리 */
CREATE TABLE TREES (
	TREE_NO INTEGER NOT NULL, /* 트리일련번호 */
	USER_NO INTEGER NOT NULL, /* 회원일련번호 */
	TITLE VARCHAR2(50) NOT NULL /* 트리명 */
);

COMMENT ON TABLE TREES IS '트리';

COMMENT ON COLUMN TREES.TREE_NO IS '트리일련번호';

COMMENT ON COLUMN TREES.USER_NO IS '회원일련번호';

COMMENT ON COLUMN TREES.TITLE IS '트리명';

CREATE UNIQUE INDEX PK_TREES
	ON TREES (
		TREE_NO ASC
	);

ALTER TABLE TREES
	ADD
		CONSTRAINT PK_TREES
		PRIMARY KEY (
			TREE_NO
		);

ALTER TABLE REPLYS
	ADD
		CONSTRAINT FK_USERS_TO_REPLYS
		FOREIGN KEY (
			USER_NO
		)
		REFERENCES USERS (
			USER_NO
		);

ALTER TABLE REPLYS
	ADD
		CONSTRAINT FK_CONTENTS_TO_REPLYS
		FOREIGN KEY (
			CONTENT_NO
		)
		REFERENCES CONTENTS (
			CONTENT_NO
		);

ALTER TABLE KEYWORDS
	ADD
		CONSTRAINT FK_TREES_TO_KEYWORDS
		FOREIGN KEY (
			TREE_NO
		)
		REFERENCES TREES (
			TREE_NO
		);

ALTER TABLE KEYWORDS
	ADD
		CONSTRAINT FK_USERS_TO_KEYWORDS
		FOREIGN KEY (
			OWNER_USER_NO
		)
		REFERENCES USERS (
			USER_NO
		);

ALTER TABLE FRIENDS
	ADD
		CONSTRAINT FK_USERS_TO_FRIENDS
		FOREIGN KEY (
			USER_NO
		)
		REFERENCES USERS (
			USER_NO
		);

ALTER TABLE FRIENDS
	ADD
		CONSTRAINT FK_USERS_TO_FRIENDS2
		FOREIGN KEY (
			USER_NO2
		)
		REFERENCES USERS (
			USER_NO
		);

ALTER TABLE CONTENTS
	ADD
		CONSTRAINT FK_KEYWORDS_TO_CONTENTS
		FOREIGN KEY (
			KEYWORD_NO
		)
		REFERENCES KEYWORDS (
			KEYWORD_NO
		);

ALTER TABLE TREES
	ADD
		CONSTRAINT FK_USERS_TO_TREES
		FOREIGN KEY (
			USER_NO
		)
		REFERENCES USERS (
			USER_NO
		);
		
INSERT INTO "TREE"."USERS" (USER_NO, EMAIL, PASSWORD, NAME, PHONE, PHOTO, SNSUSER) VALUES (seq_users_user_no.nextval, 'abc@naver.com', 'aaa', '홍길동', '01044557788', 'image.jpg', 'abc');
INSERT INTO "TREE"."USERS" (USER_NO, EMAIL, PASSWORD, NAME, PHONE, PHOTO, SNSUSER) VALUES (seq_users_user_no.nextval, 'abc@google.com', 'bbb', '홍길순', '01022331144', 'image.jpg', 'ccc');

INSERT INTO "TREE"."TREES" (TREE_NO, USER_NO, TITLE) VALUES (seq_trees_tree_no.nextval, '1000000', 'AA');
INSERT INTO "TREE"."TREES" (TREE_NO, USER_NO, TITLE) VALUES (seq_trees_tree_no.nextval, '1000000', 'BB');
INSERT INTO "TREE"."TREES" (TREE_NO, USER_NO, TITLE) VALUES (seq_trees_tree_no.nextval, '1000001', 'CC');
INSERT INTO "TREE"."TREES" (TREE_NO, USER_NO, TITLE) VALUES (seq_trees_tree_no.nextval, '1000001', 'DD');

INSERT INTO "TREE"."KEYWORDS" (KEYWORD_NO, TREE_NO, OWNER_USER_NO, KEYWORD, COLLAPSE) VALUES (seq_keywords_keyword_no.nextval, '1000000', '1000000', '과일', '1');
INSERT INTO "TREE"."KEYWORDS" (KEYWORD_NO, TREE_NO, OWNER_USER_NO, KEYWORD, COLLAPSE, PARENT_KEYWORD_NO) VALUES (seq_keywords_keyword_no.nextval, '1000000', '1000000', '사과', '1', '1000000');
INSERT INTO "TREE"."KEYWORDS" (KEYWORD_NO, TREE_NO, OWNER_USER_NO, KEYWORD, COLLAPSE) VALUES (seq_keywords_keyword_no.nextval, '1000000', '1000000', '사자', '0');
INSERT INTO "TREE"."KEYWORDS" (KEYWORD_NO, TREE_NO, OWNER_USER_NO, KEYWORD, COLLAPSE) VALUES (seq_keywords_keyword_no.nextval, '1000001', '1000000', '원숭이', '0');
INSERT INTO "TREE"."KEYWORDS" (KEYWORD_NO, TREE_NO, OWNER_USER_NO, KEYWORD, COLLAPSE) VALUES (seq_keywords_keyword_no.nextval, '1000001', '1000000', '송이버섯', '1');
INSERT INTO "TREE"."KEYWORDS" (KEYWORD_NO, TREE_NO, OWNER_USER_NO, KEYWORD, COLLAPSE) VALUES (seq_keywords_keyword_no.nextval, '1000002', '1000001', '과자', '1');
INSERT INTO "TREE"."KEYWORDS" (KEYWORD_NO, TREE_NO, OWNER_USER_NO, KEYWORD, COLLAPSE, PARENT_KEYWORD_NO) VALUES (seq_keywords_keyword_no.nextval, '1000002', '1000001', '바나나킥', '1', '1000005');
INSERT INTO "TREE"."KEYWORDS" (KEYWORD_NO, TREE_NO, OWNER_USER_NO, KEYWORD, COLLAPSE) VALUES (seq_keywords_keyword_no.nextval, '1000003', '1000001', '리조뜨', '0');

INSERT INTO "TREE"."CONTENTS" (CONTENT_NO, KEYWORD_NO, CONTENT, PHOTO, SCRAP, REG_DATE) VALUES (seq_contents_content_no.nextval, '1000000', '내용', 'image.jpg', '0', TO_DATE('2015-11-27 05:45:21', 'YYYY-MM-DD HH24:MI:SS'));
INSERT INTO "TREE"."CONTENTS" (CONTENT_NO, KEYWORD_NO, CONTENT, PHOTO, SCRAP, REG_DATE) VALUES (seq_contents_content_no.nextval, '1000001', '내용', 'image.jpg', '0', TO_DATE('2015-11-27 00:00:00', 'YYYY-MM-DD HH24:MI:SS'));
INSERT INTO "TREE"."CONTENTS" (CONTENT_NO, KEYWORD_NO, CONTENT, PHOTO, SCRAP, REG_DATE) VALUES (seq_contents_content_no.nextval, '1000002', '내용', 'image.jpg', '0', TO_DATE('2015-11-27 00:00:00', 'YYYY-MM-DD HH24:MI:SS'));
INSERT INTO "TREE"."CONTENTS" (CONTENT_NO, KEYWORD_NO, CONTENT, PHOTO, SCRAP, REG_DATE) VALUES (seq_contents_content_no.nextval, '1000003', '내용', 'image.jpg', '0', TO_DATE('2015-11-27 00:00:00', 'YYYY-MM-DD HH24:MI:SS'));
INSERT INTO "TREE"."CONTENTS" (CONTENT_NO, KEYWORD_NO, CONTENT, PHOTO, SCRAP, REG_DATE) VALUES (seq_contents_content_no.nextval, '1000004', '내용', 'image.jpg', '0', TO_DATE('2015-11-27 00:00:00', 'YYYY-MM-DD HH24:MI:SS'));
INSERT INTO "TREE"."CONTENTS" (CONTENT_NO, KEYWORD_NO, CONTENT, PHOTO, SCRAP, REG_DATE) VALUES (seq_contents_content_no.nextval, '1000005', '내용', 'image.jpg', '0', TO_DATE('2015-11-27 00:00:00', 'YYYY-MM-DD HH24:MI:SS'));
INSERT INTO "TREE"."CONTENTS" (CONTENT_NO, KEYWORD_NO, CONTENT, PHOTO, SCRAP, REG_DATE) VALUES (seq_contents_content_no.nextval, '1000006', '내용', 'image.jpg', '0', TO_DATE('2015-11-28 05:46:17', 'YYYY-MM-DD HH24:MI:SS'));
INSERT INTO "TREE"."CONTENTS" (CONTENT_NO, KEYWORD_NO, CONTENT, PHOTO, SCRAP, REG_DATE) VALUES (seq_contents_content_no.nextval, '1000007', '내용', 'image.jpg', '0', TO_DATE('2015-11-28 00:00:00', 'YYYY-MM-DD HH24:MI:SS'));
