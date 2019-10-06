/**
 * 이름: gridstack.util
 * 설명: 그리드 스택에 관련된 JQuery 유틸을 제공한다. Vue 파일에는 제이쿼리 문법을 섞어 쓰지 않기 위함이다.
 */

/**
 * 이름: createLayout
 * 설명: Layout이 페이지에 마운트되면 GridStack 객체를 생성한다.
 * @param {*} targetEl
 */
export function createLayout(targetEl) {
    $(targetEl).gridstack()
}

/**
 * 이름: destroyLayout
 * 설명: Layout 파괴시 GridStack 객체를 제거한다.
 * @param {*} targetEl
 */
export function destroyLayout(targetEl) {
    const grid = $(targetEl).data('gridstack')
    grid.destroy()
}

/**
 * 이름: initWidgets
 * 설명: 추가된 모든 위젯을 제거한다.
 */
export function initWidgets (targetEl) {
    // 레이아웃 객체 가져오기
   const grid = $(targetEl).data('gridstack')

   // 모든 위젯 제거
   grid.removeAll()
}

/**
 * 이름: addWidget
 * 설명: 레이아웃에 새로운 위젯을 추가한다.
 */
export function addWidget (targetEl, widgetEl, x = 0, y = 0, w = 1, h = 1, autoPosition = true) {
    // 레이아웃 객체 가져오기
    const grid = $(targetEl).data('gridstack')

    // 위젯 객체 생성
    grid.addWidget(widgetEl, x, y, w, h, autoPosition)
}

/**
 * 이름: removeWidget
 * 설명: 개별 위젯을 제거한다.
 * @param {*} targetEl 
 */
export function removeWidget (targetEl, targetWidget) {
    // 레이아웃 객체 가져오기
    const grid = $(targetEl).data('gridstack')

    // 대상 위젯 찾아서 제거
    grid.removeWidget(targetWidget)
}

/**
 * 이름: lockedWidget
 * 설명: 대상 위젯을 잠근다. 잠금 상태에서 다른 위젯과 위치교환, 드래그, 리사이즈가 불가능하다.
 */
export function lockedWidget (targetEl, targetWidget, isLock = false) {
    // 레이아웃 객체 가져오기
    const grid = $(targetEl).data('gridstack')

    // 대상 위젯 잠금
    grid.locked(targetWidget, isLock)

    // 대상 위젯 차단
    grid.movable(targetWidget, !isLock)

    // 대상 위젯 리사이즈 차단
    grid.resizable(targetWidget, !isLock)
}

/**
 * 이름: resizableWidget
 * 설명: 대상 위젯의 리사이즈 기능 여부를 선택한다.
 */
export function resizableWidget (targetEl, targetWidget, isResizable = true) {
    // 레이아웃 객체 가져오기
    const grid = $(targetEl).data('gridstack')

    // 대상 위젯 리사이즈 여부 설정
    grid.resizable(targetWidget, isResizable)
}

/**
 * 이름: movableWidget
 * 설명: 대상 위젯의 드래그 기능 여부를 선택한다.
 */
export function movableWidget (targetEl, targetWidget, isMovable = true) {
    // 레이아웃 객체 가져오기
    const grid = $(targetEl).data('gridstack')

    // 대상 위젯 움직임 여부 확인
    grid.movable(targetWidget, isMovable)
}