# Solidware Coding Test

developed by SaetByeol Ahn

## 개발 환경
- React.js (CRA)
- HTML, CSS

## 사용한 모듈
- react-router-dom : 라우팅
- react-toastify : toast 메시지 UI 라이브러리

## 페이지
- / : 메인 페이지
- /movies : Upcoming movies
- /user : watch list

## 구현 기능
- Fetch Upcoming movies : `data.js`, 무한 스크롤 구현
- Save movies : `localStroage` 저장
- Fetch movie detail : watch list에 담은 영화에 대한 detail
- Toast message : watch list에 저장한 경우, 삭제한 경우 알림

## 조건
1. The web application should have two pages: 'Upcoming movies' and 'Watch list' `충족`
2. In 'Upcoming movies', all upcoming movies should be listed. `충족`
3. In 'Upcoming movies', the user should be able to add a movie to their watch list. `충족`
4. In 'Watch list', all movies the user wants to see should be listed. `충족`
5. In 'Watch list', all movies should be sorted by release date (descending - most recent movie first). 
6. In 'Watch list', the user should be able to remove a movie from their watch list. 
7. A movie should show the following information:
  - Title
  - Average vote
  - Overview
  - Release date
  - Genres
  - Poster
