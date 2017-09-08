var _lo_ra_mac_8h =
[
    [ "sFields", "group___l_o_r_a_m_a_c.html#struct_dr_range__t_1_1s_fields", [
      [ "Min", "group___l_o_r_a_m_a_c.html#ad870086364c5eb410eec40e1025e3203", null ],
      [ "Max", "group___l_o_r_a_m_a_c.html#a5d03c6d792ca60d11ffc7e7a2cb59dd0", null ]
    ] ],
    [ "sHdrBits", "group___l_o_r_a_m_a_c.html#struct_lo_ra_mac_header__t_1_1s_hdr_bits", [
      [ "Major", "group___l_o_r_a_m_a_c.html#a9c6cb78b2f0ce027b8eb427523270d1d", null ],
      [ "RFU", "group___l_o_r_a_m_a_c.html#a1edefc7ee6540e182ed8705e51c90045", null ],
      [ "MType", "group___l_o_r_a_m_a_c.html#a1b16521f6356e21b690406a9aa7ce147", null ]
    ] ],
    [ "sCtrlBits", "group___l_o_r_a_m_a_c.html#struct_lo_ra_mac_frame_ctrl__t_1_1s_ctrl_bits", [
      [ "FOptsLen", "group___l_o_r_a_m_a_c.html#aca65acebde222837502f6cf8e2aeeac8", null ],
      [ "FPending", "group___l_o_r_a_m_a_c.html#a2d5d8f602343aff45f870d4c38ffa0df", null ],
      [ "Ack", "group___l_o_r_a_m_a_c.html#a7a652a0a459bea0bd46edc2b83c3eacc", null ],
      [ "AdrAckReq", "group___l_o_r_a_m_a_c.html#ae07af36cd9769b8a153f393715d7eaa7", null ],
      [ "Adr", "group___l_o_r_a_m_a_c.html#af5bcc6a131748c79430a7ce1198e0d7f", null ]
    ] ],
    [ "sMacFlagBits", "group___l_o_r_a_m_a_c.html#struct_lo_ra_mac_flags__t_1_1s_mac_flag_bits", [
      [ "McpsReq", "group___l_o_r_a_m_a_c.html#adee8f234933a066317a08431f5db61b0", null ],
      [ "McpsInd", "group___l_o_r_a_m_a_c.html#a81d24e4d487adef6c6d4f4ca0963319e", null ],
      [ "McpsIndSkip", "group___l_o_r_a_m_a_c.html#a45141607ee2f47da2432d5d2a8045e69", null ],
      [ "MlmeReq", "group___l_o_r_a_m_a_c.html#a3743e193dca88e3913e44e993a209ebf", null ],
      [ "MacDone", "group___l_o_r_a_m_a_c.html#a8b4a19cca2ba529046ea88bb13305407", null ]
    ] ],
    [ "uMcpsParam", "group___l_o_r_a_m_a_c.html#union_mcps_req__t_1_1u_mcps_param", [
      [ "Unconfirmed", "group___l_o_r_a_m_a_c.html#a490d6060b7d5f999539375d160304e9c", null ],
      [ "Confirmed", "group___l_o_r_a_m_a_c.html#aa6b3511826dee52ed1b057c1762f4afa", null ],
      [ "Proprietary", "group___l_o_r_a_m_a_c.html#ad79bb26667e5f61b5e5dd5d58a085b48", null ]
    ] ],
    [ "uMlmeParam", "group___l_o_r_a_m_a_c.html#union_mlme_req__t_1_1u_mlme_param", [
      [ "Join", "group___l_o_r_a_m_a_c.html#a172a908e5643a97e1e911d97d8b2c363", null ],
      [ "TxCw", "group___l_o_r_a_m_a_c.html#aa69808af2b2999fc4b8b409b593173ab", null ]
    ] ],
    [ "MAC_STATE_CHECK_TIMEOUT", "group___l_o_r_a_m_a_c.html#ga3468d8935b09a7191e43fecdd9a15c67", null ],
    [ "MAX_ACK_RETRIES", "group___l_o_r_a_m_a_c.html#ga47bc6aeb5be0ba39387e2049e342fa7e", null ],
    [ "UP_LINK", "group___l_o_r_a_m_a_c.html#ga7e75f3071d6911b19a563d554038f8da", null ],
    [ "DOWN_LINK", "group___l_o_r_a_m_a_c.html#ga801525db3ba12b250029f026403524b7", null ],
    [ "LORAMAC_MFR_LEN", "group___l_o_r_a_m_a_c.html#ga1727f288e9a871f1474ce61f942a08f3", null ],
    [ "LORA_MAC_FRMPAYLOAD_OVERHEAD", "group___l_o_r_a_m_a_c.html#ga9623296c345a3636f460ecdb8b1bbd9d", null ],
    [ "DeviceClass_t", "group___l_o_r_a_m_a_c.html#gad065f3831c9a00390949d52a93074970", [
      [ "CLASS_A", "group___l_o_r_a_m_a_c.html#ggad065f3831c9a00390949d52a93074970a307ee33f71385819abc142fe4f23c3bb", null ],
      [ "CLASS_B", "group___l_o_r_a_m_a_c.html#ggad065f3831c9a00390949d52a93074970a10611f4c3b970c7d722c98eaea63ddd5", null ],
      [ "CLASS_C", "group___l_o_r_a_m_a_c.html#ggad065f3831c9a00390949d52a93074970abfee35359a39adbacbc3f13eddc76cd0", null ]
    ] ],
    [ "LoRaMacFrameType_t", "group___l_o_r_a_m_a_c.html#gaa4faa85be75a0f7b173d1db23922d4f2", [
      [ "FRAME_TYPE_JOIN_REQ", "group___l_o_r_a_m_a_c.html#ggaa4faa85be75a0f7b173d1db23922d4f2ae01d60e50804065d3564dc1e12d80811", null ],
      [ "FRAME_TYPE_JOIN_ACCEPT", "group___l_o_r_a_m_a_c.html#ggaa4faa85be75a0f7b173d1db23922d4f2a47ee6b14ec9dfe5ae33773749c30c103", null ],
      [ "FRAME_TYPE_DATA_UNCONFIRMED_UP", "group___l_o_r_a_m_a_c.html#ggaa4faa85be75a0f7b173d1db23922d4f2a6701b29296dc0a006f52d51f510a138f", null ],
      [ "FRAME_TYPE_DATA_UNCONFIRMED_DOWN", "group___l_o_r_a_m_a_c.html#ggaa4faa85be75a0f7b173d1db23922d4f2a0309638c699fe7748561e2bac00bd689", null ],
      [ "FRAME_TYPE_DATA_CONFIRMED_UP", "group___l_o_r_a_m_a_c.html#ggaa4faa85be75a0f7b173d1db23922d4f2ac64f43487ee770c216c2ee1a829b75ca", null ],
      [ "FRAME_TYPE_DATA_CONFIRMED_DOWN", "group___l_o_r_a_m_a_c.html#ggaa4faa85be75a0f7b173d1db23922d4f2ad9249e47768f5551f2733532da9f3712", null ],
      [ "FRAME_TYPE_RFU", "group___l_o_r_a_m_a_c.html#ggaa4faa85be75a0f7b173d1db23922d4f2a161e7c522a6d16fc5d3efb813f2f1351", null ],
      [ "FRAME_TYPE_PROPRIETARY", "group___l_o_r_a_m_a_c.html#ggaa4faa85be75a0f7b173d1db23922d4f2a68dbf0499a1912728cc6a6d1ab328b37", null ]
    ] ],
    [ "LoRaMacMoteCmd_t", "group___l_o_r_a_m_a_c.html#ga26a00d3cd56eeef4e681e5a0dcf382c2", [
      [ "MOTE_MAC_LINK_CHECK_REQ", "group___l_o_r_a_m_a_c.html#gga26a00d3cd56eeef4e681e5a0dcf382c2a035270648ea6d6ff24b23a953d8f969b", null ],
      [ "MOTE_MAC_LINK_ADR_ANS", "group___l_o_r_a_m_a_c.html#gga26a00d3cd56eeef4e681e5a0dcf382c2a7e789c1aa1dfcd3ca03935dd65cf572c", null ],
      [ "MOTE_MAC_DUTY_CYCLE_ANS", "group___l_o_r_a_m_a_c.html#gga26a00d3cd56eeef4e681e5a0dcf382c2a258e400aeae362afff0d14b7f6153bd4", null ],
      [ "MOTE_MAC_RX_PARAM_SETUP_ANS", "group___l_o_r_a_m_a_c.html#gga26a00d3cd56eeef4e681e5a0dcf382c2a155ae506492f1ddb173b99b52da4092a", null ],
      [ "MOTE_MAC_DEV_STATUS_ANS", "group___l_o_r_a_m_a_c.html#gga26a00d3cd56eeef4e681e5a0dcf382c2ae3d02a70f26e3f3daf8a84408e962425", null ],
      [ "MOTE_MAC_NEW_CHANNEL_ANS", "group___l_o_r_a_m_a_c.html#gga26a00d3cd56eeef4e681e5a0dcf382c2a83cdaea222c3968f69fe1c23c29a4385", null ],
      [ "MOTE_MAC_RX_TIMING_SETUP_ANS", "group___l_o_r_a_m_a_c.html#gga26a00d3cd56eeef4e681e5a0dcf382c2abd4c19102721cfb18b76136732ac2de8", null ],
      [ "MOTE_MAC_TX_PARAM_SETUP_ANS", "group___l_o_r_a_m_a_c.html#gga26a00d3cd56eeef4e681e5a0dcf382c2a462cebd0ba7165044eeabf44c00b1f4c", null ],
      [ "MOTE_MAC_DL_CHANNEL_ANS", "group___l_o_r_a_m_a_c.html#gga26a00d3cd56eeef4e681e5a0dcf382c2a6dfc8ca9222ce73c834a0907992cce13", null ]
    ] ],
    [ "LoRaMacSrvCmd_t", "group___l_o_r_a_m_a_c.html#ga4f91028194f81a04f72e33f2fdda2052", [
      [ "SRV_MAC_LINK_CHECK_ANS", "group___l_o_r_a_m_a_c.html#gga4f91028194f81a04f72e33f2fdda2052ac9df0550be22a470d4f68681ee97191c", null ],
      [ "SRV_MAC_LINK_ADR_REQ", "group___l_o_r_a_m_a_c.html#gga4f91028194f81a04f72e33f2fdda2052af7fc388963e2bb713062bd51960ed4cc", null ],
      [ "SRV_MAC_DUTY_CYCLE_REQ", "group___l_o_r_a_m_a_c.html#gga4f91028194f81a04f72e33f2fdda2052ae1175fb1d39611d84efb70f141064fbf", null ],
      [ "SRV_MAC_RX_PARAM_SETUP_REQ", "group___l_o_r_a_m_a_c.html#gga4f91028194f81a04f72e33f2fdda2052a534efe0aaa23bc72032a0e8b0335832b", null ],
      [ "SRV_MAC_DEV_STATUS_REQ", "group___l_o_r_a_m_a_c.html#gga4f91028194f81a04f72e33f2fdda2052ac98ae516df5419b24285a74da2d58d7f", null ],
      [ "SRV_MAC_NEW_CHANNEL_REQ", "group___l_o_r_a_m_a_c.html#gga4f91028194f81a04f72e33f2fdda2052a34e94bc23cacf1ab088ae1010e55efeb", null ],
      [ "SRV_MAC_RX_TIMING_SETUP_REQ", "group___l_o_r_a_m_a_c.html#gga4f91028194f81a04f72e33f2fdda2052aa24b1505ef48247c1d2a3d486d603686", null ],
      [ "SRV_MAC_TX_PARAM_SETUP_REQ", "group___l_o_r_a_m_a_c.html#gga4f91028194f81a04f72e33f2fdda2052a6b15b371027770899224e613bbe162a8", null ],
      [ "SRV_MAC_DL_CHANNEL_REQ", "group___l_o_r_a_m_a_c.html#gga4f91028194f81a04f72e33f2fdda2052ae3385a6aa575b3ac756c362dbbc8c39f", null ]
    ] ],
    [ "LoRaMacBatteryLevel_t", "group___l_o_r_a_m_a_c.html#ga5a62cf2c7cfb24beb4fa7c89d3574665", [
      [ "BAT_LEVEL_EXT_SRC", "group___l_o_r_a_m_a_c.html#gga5a62cf2c7cfb24beb4fa7c89d3574665ab2585bfe30f5bf5b5eee079ed2239cf4", null ],
      [ "BAT_LEVEL_EMPTY", "group___l_o_r_a_m_a_c.html#gga5a62cf2c7cfb24beb4fa7c89d3574665aa350120effa2360e583ad6e91704b067", null ],
      [ "BAT_LEVEL_FULL", "group___l_o_r_a_m_a_c.html#gga5a62cf2c7cfb24beb4fa7c89d3574665a72005e8306adb99b1398ff2c6817e6b9", null ],
      [ "BAT_LEVEL_NO_MEASURE", "group___l_o_r_a_m_a_c.html#gga5a62cf2c7cfb24beb4fa7c89d3574665a74b9377d8f67a38ad73ce627ba610b55", null ]
    ] ],
    [ "LoRaMacEventInfoStatus_t", "group___l_o_r_a_m_a_c.html#ga4fa00aa27e8cba6a5634574517cb1260", [
      [ "LORAMAC_EVENT_INFO_STATUS_OK", "group___l_o_r_a_m_a_c.html#gga4fa00aa27e8cba6a5634574517cb1260aa5e3d1c382c8473a1095b56067aea3f4", null ],
      [ "LORAMAC_EVENT_INFO_STATUS_ERROR", "group___l_o_r_a_m_a_c.html#gga4fa00aa27e8cba6a5634574517cb1260a613ed77c0e8416a512224fffdbfdf6c1", null ],
      [ "LORAMAC_EVENT_INFO_STATUS_TX_TIMEOUT", "group___l_o_r_a_m_a_c.html#gga4fa00aa27e8cba6a5634574517cb1260a0c2eb197e4102e139b43c01e806fa538", null ],
      [ "LORAMAC_EVENT_INFO_STATUS_RX1_TIMEOUT", "group___l_o_r_a_m_a_c.html#gga4fa00aa27e8cba6a5634574517cb1260ab79a8aa20783ae5825ab8488d66a77cc", null ],
      [ "LORAMAC_EVENT_INFO_STATUS_RX2_TIMEOUT", "group___l_o_r_a_m_a_c.html#gga4fa00aa27e8cba6a5634574517cb1260a743858a21ae7cb162abc9acaa62cd4df", null ],
      [ "LORAMAC_EVENT_INFO_STATUS_RX1_ERROR", "group___l_o_r_a_m_a_c.html#gga4fa00aa27e8cba6a5634574517cb1260a7bea16ca3ce17932dd5ee3558fdd0ed1", null ],
      [ "LORAMAC_EVENT_INFO_STATUS_RX2_ERROR", "group___l_o_r_a_m_a_c.html#gga4fa00aa27e8cba6a5634574517cb1260afe9be38729233485ea6edd190eaa8716", null ],
      [ "LORAMAC_EVENT_INFO_STATUS_JOIN_FAIL", "group___l_o_r_a_m_a_c.html#gga4fa00aa27e8cba6a5634574517cb1260af42941643347e10f0e5a01c324bf6170", null ],
      [ "LORAMAC_EVENT_INFO_STATUS_DOWNLINK_REPEATED", "group___l_o_r_a_m_a_c.html#gga4fa00aa27e8cba6a5634574517cb1260aaae47a8316ae996d506323e0e6613b9b", null ],
      [ "LORAMAC_EVENT_INFO_STATUS_TX_DR_PAYLOAD_SIZE_ERROR", "group___l_o_r_a_m_a_c.html#gga4fa00aa27e8cba6a5634574517cb1260a6e7b21fbf0358f3438f2de0fc3fdd866", null ],
      [ "LORAMAC_EVENT_INFO_STATUS_DOWNLINK_TOO_MANY_FRAMES_LOSS", "group___l_o_r_a_m_a_c.html#gga4fa00aa27e8cba6a5634574517cb1260a4a75f7744209239bb80e6af142d0249d", null ],
      [ "LORAMAC_EVENT_INFO_STATUS_ADDRESS_FAIL", "group___l_o_r_a_m_a_c.html#gga4fa00aa27e8cba6a5634574517cb1260af141bb217ba31a2dc7d3cc128a13de10", null ],
      [ "LORAMAC_EVENT_INFO_STATUS_MIC_FAIL", "group___l_o_r_a_m_a_c.html#gga4fa00aa27e8cba6a5634574517cb1260a43bdb9277722c567c81539fd175a7a63", null ]
    ] ],
    [ "Mcps_t", "group___l_o_r_a_m_a_c.html#ga3a34a8c4488f3dd643fa1fc390691696", [
      [ "MCPS_UNCONFIRMED", "group___l_o_r_a_m_a_c.html#gga3a34a8c4488f3dd643fa1fc390691696a340afc087e96410da04d07fb0470f84a", null ],
      [ "MCPS_CONFIRMED", "group___l_o_r_a_m_a_c.html#gga3a34a8c4488f3dd643fa1fc390691696a5eb18aef0f2abda0d56add7e868b8546", null ],
      [ "MCPS_MULTICAST", "group___l_o_r_a_m_a_c.html#gga3a34a8c4488f3dd643fa1fc390691696aba17be1162725df5e78e03b3aeff83fa", null ],
      [ "MCPS_PROPRIETARY", "group___l_o_r_a_m_a_c.html#gga3a34a8c4488f3dd643fa1fc390691696a29a54ded2edefe9179a33a14e3ceaca5", null ]
    ] ],
    [ "Mlme_t", "group___l_o_r_a_m_a_c.html#ga867a2ba8db200cd6a00511fec9979f1c", [
      [ "MLME_JOIN", "group___l_o_r_a_m_a_c.html#gga867a2ba8db200cd6a00511fec9979f1ca475ad5dea1c4c13b93b31095c665e92e", null ],
      [ "MLME_LINK_CHECK", "group___l_o_r_a_m_a_c.html#gga867a2ba8db200cd6a00511fec9979f1ca57ba2a5951a2a4637ff0e574c0e48750", null ],
      [ "MLME_TXCW", "group___l_o_r_a_m_a_c.html#gga867a2ba8db200cd6a00511fec9979f1ca7633734852fb50e0f241ae8059b0aed1", null ],
      [ "MLME_TXCW_1", "group___l_o_r_a_m_a_c.html#gga867a2ba8db200cd6a00511fec9979f1ca9a6b50c77269c8fbff9a5a6d33574503", null ]
    ] ],
    [ "Mib_t", "group___l_o_r_a_m_a_c.html#ga64429ce77a29145f6a7508df5eaa2d3e", [
      [ "MIB_DEVICE_CLASS", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3eac0426517132356c9977dcdafa5ab3a7f", null ],
      [ "MIB_NETWORK_JOINED", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3ea2e2a91bfbbb7bbbe1467eec239effbd0", null ],
      [ "MIB_ADR", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3ea756ff0b66217e3e4ddd0442c8aa56802", null ],
      [ "MIB_NET_ID", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3ea982c4b7cc1e276633134aa89298c96b0", null ],
      [ "MIB_DEV_ADDR", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3eab1459b05690ffa347a71393006b526ac", null ],
      [ "MIB_NWK_SKEY", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3ea60d7688e714c9b140648aadd2e7ab36e", null ],
      [ "MIB_APP_SKEY", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3eae65b7c035d9969666eb5e26a2b3c19fd", null ],
      [ "MIB_PUBLIC_NETWORK", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3eab2819c46ba94b53c1fb2c3a0bfa75e48", null ],
      [ "MIB_REPEATER_SUPPORT", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3ea2d0a50cc4dd24771854bd138934ef3e5", null ],
      [ "MIB_CHANNELS", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3ea0236aae7748c12308383eab208a3cc5a", null ],
      [ "MIB_RX2_CHANNEL", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3ea60fe29749b57c7a5315e9c1475269ba3", null ],
      [ "MIB_RX2_DEFAULT_CHANNEL", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3eac3a212e314ab58f78007ce812187179d", null ],
      [ "MIB_CHANNELS_MASK", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3eaafe40b1c0e252d607876423247feab62", null ],
      [ "MIB_CHANNELS_DEFAULT_MASK", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3ea59afc276ca425cd4055ff5cb5b5fa946", null ],
      [ "MIB_CHANNELS_NB_REP", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3eaf8775ceffd8bc73429e43eac205383ea", null ],
      [ "MIB_MAX_RX_WINDOW_DURATION", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3ead6ba0cae3e33f0cf042ded8936d965da", null ],
      [ "MIB_RECEIVE_DELAY_1", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3eaa3511cfca5a46654d97b022d50c82ae8", null ],
      [ "MIB_RECEIVE_DELAY_2", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3ea3d147bf887f0d7317cb2930335857000", null ],
      [ "MIB_JOIN_ACCEPT_DELAY_1", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3ea3fa6b527109f8a6d5994ddaf7e9b0bd1", null ],
      [ "MIB_JOIN_ACCEPT_DELAY_2", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3eaa1ca7d4484b41008a69d5d786cfd6a20", null ],
      [ "MIB_CHANNELS_DEFAULT_DATARATE", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3eaddef34adbf844ace9eeea97ae93da918", null ],
      [ "MIB_CHANNELS_DATARATE", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3ea78f3b4e3ae4ebaacb478073d2a2ec4f1", null ],
      [ "MIB_CHANNELS_TX_POWER", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3eae42f1a0c858ffdb283e0236a24ab6398", null ],
      [ "MIB_CHANNELS_DEFAULT_TX_POWER", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3ea9c5b2d3ad2caf87710b09e8a6e68cc6a", null ],
      [ "MIB_UPLINK_COUNTER", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3ead0d2e0023858ce3fab3647fa97428d84", null ],
      [ "MIB_DOWNLINK_COUNTER", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3eae75b53deee33594312d1d2987c24b698", null ],
      [ "MIB_MULTICAST_CHANNEL", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3eaf8ac424460fccb3115c6fe6ccb450862", null ],
      [ "MIB_SYSTEM_MAX_RX_ERROR", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3ead5d382841f32fba944bdb68b25699e45", null ],
      [ "MIB_MIN_RX_SYMBOLS", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3ea82fb27fd6414d2bde20a7a00c80e26a1", null ],
      [ "MIB_ANTENNA_GAIN", "group___l_o_r_a_m_a_c.html#gga64429ce77a29145f6a7508df5eaa2d3ea268b2f7da53dbc25655a7bdcc7e6128e", null ]
    ] ],
    [ "LoRaMacStatus_t", "group___l_o_r_a_m_a_c.html#ga363b63a6d24ca4827c81898ebb1887e9", [
      [ "LORAMAC_STATUS_OK", "group___l_o_r_a_m_a_c.html#gga363b63a6d24ca4827c81898ebb1887e9a03db5fca052313edb3823c014b653a74", null ],
      [ "LORAMAC_STATUS_BUSY", "group___l_o_r_a_m_a_c.html#gga363b63a6d24ca4827c81898ebb1887e9a66b12f569207eacd97ee1c1d6c4cee6d", null ],
      [ "LORAMAC_STATUS_SERVICE_UNKNOWN", "group___l_o_r_a_m_a_c.html#gga363b63a6d24ca4827c81898ebb1887e9aff502a87db22d6a9a4919e4b54c7c1cf", null ],
      [ "LORAMAC_STATUS_PARAMETER_INVALID", "group___l_o_r_a_m_a_c.html#gga363b63a6d24ca4827c81898ebb1887e9ad0d3119f247d00e1787dda106fcb3017", null ],
      [ "LORAMAC_STATUS_FREQUENCY_INVALID", "group___l_o_r_a_m_a_c.html#gga363b63a6d24ca4827c81898ebb1887e9ae3ea7b89796aed5a320013d9743b2955", null ],
      [ "LORAMAC_STATUS_DATARATE_INVALID", "group___l_o_r_a_m_a_c.html#gga363b63a6d24ca4827c81898ebb1887e9aa910e51ef7a7cf64c27dd3ffe5eb9d38", null ],
      [ "LORAMAC_STATUS_FREQ_AND_DR_INVALID", "group___l_o_r_a_m_a_c.html#gga363b63a6d24ca4827c81898ebb1887e9a163a1a739baee13607068af42f2e9d30", null ],
      [ "LORAMAC_STATUS_NO_NETWORK_JOINED", "group___l_o_r_a_m_a_c.html#gga363b63a6d24ca4827c81898ebb1887e9a105228330376111d46d99d57688a20ae", null ],
      [ "LORAMAC_STATUS_LENGTH_ERROR", "group___l_o_r_a_m_a_c.html#gga363b63a6d24ca4827c81898ebb1887e9a4ab40311dcd2eeffc77f573a919b29b1", null ],
      [ "LORAMAC_STATUS_DEVICE_OFF", "group___l_o_r_a_m_a_c.html#gga363b63a6d24ca4827c81898ebb1887e9aff1d3a91250809d1770a74776057b8ce", null ],
      [ "LORAMAC_STATUS_REGION_NOT_SUPPORTED", "group___l_o_r_a_m_a_c.html#gga363b63a6d24ca4827c81898ebb1887e9af424839424174be5fc5e52e00160940e", null ]
    ] ],
    [ "LoRaMacRegion_t", "group___l_o_r_a_m_a_c.html#ga3b9d54f0355b51e85df8b33fd1757eec", [
      [ "LORAMAC_REGION_AS923", "group___l_o_r_a_m_a_c.html#gga3b9d54f0355b51e85df8b33fd1757eeca5b791cd5d892cd4ffdc891177f9c424f", null ],
      [ "LORAMAC_REGION_AU915", "group___l_o_r_a_m_a_c.html#gga3b9d54f0355b51e85df8b33fd1757eeca31c5134a31ba71dd67fffc7cd2e8d402", null ],
      [ "LORAMAC_REGION_CN470", "group___l_o_r_a_m_a_c.html#gga3b9d54f0355b51e85df8b33fd1757eeca8bf5c395dec14c8c24bc629e9cb4ab64", null ],
      [ "LORAMAC_REGION_CN779", "group___l_o_r_a_m_a_c.html#gga3b9d54f0355b51e85df8b33fd1757eecaa462c6a59045bcdbe27177b3c7d91ed0", null ],
      [ "LORAMAC_REGION_EU433", "group___l_o_r_a_m_a_c.html#gga3b9d54f0355b51e85df8b33fd1757eeca484c9c5522a1bd8411920cc7703d3977", null ],
      [ "LORAMAC_REGION_EU868", "group___l_o_r_a_m_a_c.html#gga3b9d54f0355b51e85df8b33fd1757eecadbfed23153fb6254b9ca2301ec19c24f", null ],
      [ "LORAMAC_REGION_KR920", "group___l_o_r_a_m_a_c.html#gga3b9d54f0355b51e85df8b33fd1757eeca2f45370a935e8767a90e19e24101f859", null ],
      [ "LORAMAC_REGION_IN865", "group___l_o_r_a_m_a_c.html#gga3b9d54f0355b51e85df8b33fd1757eeca58507c2e7248ab724cd3e0d0144ebd77", null ],
      [ "LORAMAC_REGION_US915", "group___l_o_r_a_m_a_c.html#gga3b9d54f0355b51e85df8b33fd1757eecab2c106945b06878a5ded0cb466330412", null ],
      [ "LORAMAC_REGION_US915_HYBRID", "group___l_o_r_a_m_a_c.html#gga3b9d54f0355b51e85df8b33fd1757eeca973a53fba592cda6ade4592cf7b814b0", null ]
    ] ],
    [ "LoRaMacInitialization", "group___l_o_r_a_m_a_c.html#ga7ca445cf825e45999810b3991273eba5", null ],
    [ "LoRaMacQueryTxPossible", "group___l_o_r_a_m_a_c.html#ga8b0aeaf75f9404ce01da9b202252c231", null ],
    [ "LoRaMacChannelAdd", "group___l_o_r_a_m_a_c.html#gad74920538f07f34e773ca5de9ec89370", null ],
    [ "LoRaMacChannelRemove", "group___l_o_r_a_m_a_c.html#gafad6c929a33557ac2fd4000bcacd9453", null ],
    [ "LoRaMacMulticastChannelLink", "group___l_o_r_a_m_a_c.html#ga89622bf6a1705558ba7b76dbb2d59c2f", null ],
    [ "LoRaMacMulticastChannelUnlink", "group___l_o_r_a_m_a_c.html#ga1542a215938fcff1d665ae48b449335e", null ],
    [ "LoRaMacMibGetRequestConfirm", "group___l_o_r_a_m_a_c.html#ga3e208a4f73213aa801eeb9d9da7b71dd", null ],
    [ "LoRaMacMibSetRequestConfirm", "group___l_o_r_a_m_a_c.html#ga7a4ee0ced221591206b09630d4a70844", null ],
    [ "LoRaMacMlmeRequest", "group___l_o_r_a_m_a_c.html#ga097113f30feecc17c780940ff74af33e", null ],
    [ "LoRaMacMcpsRequest", "group___l_o_r_a_m_a_c.html#ga79768f8a3c22aaff84d4dfcc77ad508c", null ]
];