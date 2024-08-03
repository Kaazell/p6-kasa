import s from "./style.module.scss";

export function Host() {
  return (
    <div className={s.host}>
      <div className={s.host_name}>Alexandre Dumas</div>
      <div className={s.profile_pic}>
        {/* <img src={currentItem.host.picture} alt="" /> */}
      </div>
    </div>
  );
}
