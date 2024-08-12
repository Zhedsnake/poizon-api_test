import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreators from '../store/action-creators/'

/**
 * Хук, который возвращает объект с привязанными действиями (action creators) редукторов redux для использования в компонентах.
 *
 * Этот хук упрощает вызов действий в компонентах, так как не нужно вручную вызывать `dispatch` для каждого действия.
 * Ипользует `useDispatch` для получения функции `dispatch` из Redux store и привязывает все действия из
 * `ActionCreators` к этой функции с помощью `bindActionCreators`.
 *
 * @returns {Object} Объект с действиями, привязанными к функции `dispatch`. Каждое действие из `ActionCreators`
 * будет доступно как метод объекта.
 *
 * @example
 * const { getWordsAction, defWordsAction } = useActions();
 *
 * // Теперь можно вызывать действия без использования dispatch напрямую
 * getWordsAction();
 * defWordsAction();
 */
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}
