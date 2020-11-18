enum ToastLevel {
    success = 'success',
    warn = 'warn',
    danger = 'danger',
    info = 'info'
}

/** 创建toast */
function initToast(level: ToastLevel, msg: string, mask: boolean) {
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

/** 设置dom节点样式 */
function setCss(node: HTMLElement, css: Object) {
    for (let key in css) {
        node.style[key] = css[key];
    }
    return node
}

const Toast = {
    name: 'YToast',

    /** 成功提示 */
    success(msg: string = '', mask: boolean = false): void {
        initToast(ToastLevel.success, msg, mask);
    },

    /** 警告提示 */
    warn(msg: string = '', mask: boolean = false): void {
        initToast(ToastLevel.warn, msg, mask);
    },

    /** 危险提示 */
    danger(msg: string = '', mask: boolean = false): void {
        initToast(ToastLevel.danger, msg, mask);
    },

    /** 普通提示 */
    info(msg: string = '', mask: boolean = false): void {
        initToast(ToastLevel.info, msg, mask);
    }
};

export default Toast;
