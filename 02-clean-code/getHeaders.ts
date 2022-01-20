const getHeaders = async (asObject = false, params: any = {}) => {
  return new Promise((resolve, reject) => {
    PersistenceService.getItem(PersistenceService.KEYS.autoDataToken).then(
      autoDataToken => {
        PersistenceService.getItem(PersistenceService.KEYS.token)
          .then(token => {
            let myHeaders = new Headers({});
            myHeaders.append('random', generateUUID());

            if (params.sendJsonHeader) {
              myHeaders.append('content-type', 'application/json');
            }
            if (token && token !== '') {
              myHeaders.append('x-auth-token', token);
              myHeaders.append(
                'accept-language',
                'de-DE,de;q=0.8,en-US;q=0.6,en;q=0.4',
              );
              if (autoDataToken) {
                myHeaders.append('authorization', `Bearer ${autoDataToken}`);
              }
            }
            asObject
              ? resolve(headersToObject(myHeaders))
              : resolve(myHeaders);
          })
          .catch(function (error) {
            console.error('Fetch error', error);
            reject(error);
          });
      },
    );
  });
}
