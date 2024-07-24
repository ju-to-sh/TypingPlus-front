import { Box, Grid, Typography, List, ListItem } from "@mui/material";

import { FC, memo } from "react";
import { useStyles } from "../../hooks/useStyles";

export const TermsOfService: FC = memo(() => {
  const classes = useStyles();
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Box sx={{ width: "100%", maxWidth: 800, backgroundColor: "#ffeded", overflow: "scroll" }} p={5}>
        <Typography mb={2} textAlign="center" sx={{ typography: { xs: "h5", sm: "h4" } }}>
          利用規約
        </Typography>
        <Typography variant="body1" mb={3}>
          この利用規約（以下、「本規約」といいます。）は、Typing
          Plus（以下、「当社」といいます。）がこのウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
        </Typography>
        <Box p={2}>
          <Typography sx={{ typography: { xs: "h6", sm: "h5" } }}>
            <span className={classes.underLine}>第1条（適用）</span>
          </Typography>
          <List component="ol" className={classes.customList}>
            <ListItem>本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</ListItem>
            <ListItem>
              当社は本サービスに関し、本規約のほか，ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
            </ListItem>
            <ListItem>本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めなき限り、個別規定の規定が優先されるものとします。</ListItem>
          </List>
          <Typography sx={{ typography: { xs: "h6", sm: "h5" } }}>
            <span className={classes.underLine}>第2条（利用登録）</span>
          </Typography>
          <List component="ol" className={classes.customList}>
            <ListItem>本サービスにおいては、登録希望者が本規約に同意の上、当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。</ListItem>
            <ListItem>当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。</ListItem>
            <Typography ml="45px">・利用登録の申請に際して虚偽の事項を届け出た場合</Typography>
            <Typography ml="45px">・本規約に違反したことがある者からの申請である場合</Typography>
            <Typography ml="45px" pb={1}>
              ・その他、当社が利用登録を相当でないと判断した場合
            </Typography>
          </List>
          <Typography sx={{ typography: { xs: "h6", sm: "h5" } }}>
            <span className={classes.underLine}>第3条（パスワードの管理）</span>
          </Typography>
          <List component="ol" className={classes.customList}>
            <ListItem>ユーザーは、自己の責任において、本サービスのパスワードを適切に管理するものとします。</ListItem>
            <ListItem>
              ユーザーは、いかなる場合にも、パスワードを第三者に譲渡または貸与し、もしくは第三者と共用することはできません。当社は、メールアドレスとパスワードの組み合わせが登録情報と一致してログインされた場合には、登録しているユーザー自身による利用とみなします。
            </ListItem>
            <ListItem>パスワードが第三者によって使用されたことによって生じた損害は、当社に故意又は重大な過失がある場合を除き、当社は一切の責任を負わないものとします。</ListItem>
          </List>
          <Typography sx={{ typography: { xs: "h6", sm: "h5" } }}>
            <span className={classes.underLine}>第4条（禁止事項）</span>
          </Typography>
          <List component="ol" className={classes.customList}>
            ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
            <ListItem>法令または公序良俗に違反する行為</ListItem>
            <ListItem>犯罪行為に関連する行為</ListItem>
            <ListItem>サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為</ListItem>
            <ListItem>当社、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</ListItem>
            <ListItem>本サービスによって得られた情報を商業的に利用する行為</ListItem>
            <ListItem>当社のサービスの運営を妨害するおそれのある行為</ListItem>
            <ListItem>不正アクセスをし、またはこれを試みる行為</ListItem>
            <ListItem>他のユーザーに関する個人情報等を収集または蓄積する行為</ListItem>
            <ListItem>不正な目的を持って本サービスを利用する行為</ListItem>
            <ListItem>本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為</ListItem>
            <ListItem>他のユーザーに成りすます行為</ListItem>
            <ListItem>その他、当社が不適切と判断する行為</ListItem>
          </List>
          <Typography sx={{ typography: { xs: "h6", sm: "h5" } }}>
            <span className={classes.underLine}>第5条（本サービスの提供の停止等）</span>
          </Typography>
          <List component="ol" className={classes.customList}>
            <Typography>当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。</Typography>
            <ListItem>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</ListItem>
            <ListItem>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</ListItem>
            <ListItem>その他、当社が本サービスの提供が困難と判断した場合</ListItem>
            <Typography pb={1}>当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。</Typography>
          </List>
          <Typography sx={{ typography: { xs: "h6", sm: "h5" } }}>
            <span className={classes.underLine}>第6条（保証の否認および免責事項）</span>
          </Typography>
          <List component="ol" className={classes.customList}>
            <ListItem>
              当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
            </ListItem>
            <ListItem>
              当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意又は重過失による場合を除き、一切の責任を負いません。ただし、本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。
            </ListItem>
            <ListItem>
              前項ただし書に定める場合であっても、当社は、当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当社またはユーザーが損害発生につき予見し、または予見し得た場合を含みます。）について一切の責任を負いません。また、当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は、ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。
            </ListItem>
            <ListItem>当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。</ListItem>
          </List>
          <Typography sx={{ typography: { xs: "h6", sm: "h5" } }}>
            <span className={classes.underLine}>第7条（サービス内容の変更等）</span>
          </Typography>
          <List component="ol" className={classes.customList}>
            <Typography pb={1}>当社は、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。</Typography>
          </List>
          <Typography sx={{ typography: { xs: "h6", sm: "h5" } }}>
            <span className={classes.underLine}>第8条（利用規約の変更）</span>
          </Typography>
          <List component="ol" className={classes.customList}>
            当社は以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。
            <ListItem>規約の変更がユーザーの一般の利益に適合するとき。</ListItem>
            <ListItem>本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。</ListItem>
            当社はユーザーに対し、前項による本規約の変更にあたり、事前に、本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を通知します。
          </List>
          <Typography sx={{ typography: { xs: "h6", sm: "h5" } }} pt={1}>
            <span className={classes.underLine}>第9条（個人情報の取扱い）</span>
          </Typography>
          <List component="ol" className={classes.customList}>
            当社は、本サービスの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。
          </List>
        </Box>
      </Box>
    </Grid>
  );
});
