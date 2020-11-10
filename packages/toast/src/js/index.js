/**
 * 创建toast
 * @param level <string> 'success' | 'warn' | 'danger' | 'info'
 * @param msg <string> 提示文案
 * @param mask <boolean> 是否展示蒙层
 */
function initToast(level, msg, mask) {
    const colorMap = {
        success: '#67c23a',
        warn: '#e6a23c',
        danger: '#f56c6c',
        info: '#161618'
    };
    let body = document.querySelector('body');
    body.style.overflow = 'hidden';

    let toastNode = setCss(document.createElement('div'), {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
    });
    let msgNode = setCss(document.createElement('div'), {
        position: 'relative',
        top: '50%',
        left: '50%',
        padding: '20px',
        width: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '4px',
        opacity: 0,
        fontSize: '15px',
        color: '#fff',
        lineHeight: '1.5em',
        textAlign: 'center'
    });
    let msgTextNode = document.createTextNode(msg);

    msgNode.appendChild(msgTextNode);
    toastNode.appendChild(msgNode);
    body.appendChild(toastNode);

    setTimeout(() => {
        if (mask) {
            toastNode && (toastNode.style.transition = 'background-color 0.5s ease-in-out');
            toastNode && (toastNode.style.backgroundColor = 'rgba(0,0,0,0.5)');
        }
        msgNode && (msgNode.style.transition = 'all 0.5s');
        msgNode && (msgNode.style.backgroundColor = colorMap[level]);
        msgNode && (msgNode.style.opacity = '1');
    });
    setTimeout(() => {
        body && body.removeChild(toastNode);
        body && (body.style.overflow = '');
    }, 2500)
}

/**
 * 设置dom节点样式
 * @param node {HTMLElement}
 * @param css {Object}
 * @return {HTMLElement}
 */
function setCss(node, css) {
    for (let key in css) {
        node.style[key] = css[key];
    }
    return node
}

let Toast = {
    name: '$yToast',

    /**
     * 成功提示
     * @param msg <string> 提示信息
     * @param mask <boolean> 是否展示mask
     */
    success(msg = '', mask = false) {
        initToast('success', msg, mask);
    },

    /**
     * 警告提示
     * @param msg <string> 提示信息
     * @param mask <boolean> 是否展示mask
     */
    warn(msg = '', mask = false) {
        initToast('warn', msg, mask);
    },

    /**
     * 危险提示
     * @param msg <string> 提示信息
     * @param mask <boolean> 是否展示mask
     */
    danger(msg = '', mask = false) {
        initToast('danger', msg, mask);
    },

    /**
     * 普通提示
     * @param msg <string> 提示信息
     * @param mask <boolean> 是否展示mask
     */
    info(msg = '', mask = false) {
        initToast('info', msg, mask);
    }
};

export default Toast;
