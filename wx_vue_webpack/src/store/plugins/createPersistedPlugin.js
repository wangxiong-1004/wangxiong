/**
 * 将store存储，防止刷新后获得的数据丢失
 * @param {string} key 存储的key
 */
export default function createPersistedPlugin(options = { key: 'store' }) {
    return (store) => {
        let sessionStore = JSON.parse(sessionStorage.getItem(options.key));

        if (sessionStore) {
            store.replaceState(sessionStore);
        }

        sessionStore = null;
        store.subscribe((mutation, state) => {
            sessionStorage.setItem(options.key, JSON.stringify(state));
        });
    };
}
